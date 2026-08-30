import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef, useEffect } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Normalized mouse coordinates [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Raw mouse coordinates for the glow effect
  const rawMouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const rawMouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Cinematic smooth springs
  const smoothConfig = { damping: 40, stiffness: 40, mass: 1 };
  const springX = useSpring(mouseX, smoothConfig);
  const springY = useSpring(mouseY, smoothConfig);
  
  const glowSpringX = useSpring(rawMouseX, { damping: 30, stiffness: 50 });
  const glowSpringY = useSpring(rawMouseY, { damping: 30, stiffness: 50 });

  // 1. Background Parallax (2px)
  const bgX = useTransform(springX, [-0.5, 0.5], [-2, 2]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-2, 2]);

  // 2. Huge Text Parallax (6px -> 15px)
  const textX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const textY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  // 3. Character Parallax (10px -> 35px) & 3D Rotation for stronger tracking
  const charX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const charY = useTransform(springY, [-0.5, 0.5], [-35, 35]);
  const charRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const charRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate normalized position [-0.5, 0.5]
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
    
    // Raw coordinates for glow
    rawMouseX.set(e.clientX - rect.left);
    rawMouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Slowly recover to center
    mouseX.set(0);
    mouseY.set(0);
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      rawMouseX.set(rect.width / 2);
      rawMouseY.set(rect.height / 2);
    }
  };

  // Entry animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#c6e2f5] via-[#e2ecf6] to-[#f8e8eb] flex flex-col justify-center"
      style={{ perspective: "1200px", fontFamily: "'Noto Sans SC', sans-serif" }}
    >
      {/* 0. Ambient Soft Light & Mist */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#f4d5db]/50 rounded-full blur-[120px]" />
      </div>
      
      {/* 0.1 Mouse Interactive Glow */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-white/30 blur-[100px] pointer-events-none z-10 mix-blend-overlay"
        style={{
          x: glowSpringX,
          y: glowSpringY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* 1. Background Parallax Layer (Mist/Clouds) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#a8cdf0]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-[#f8e8eb]/40 rounded-full blur-[120px]" />
      </motion.div>

      {/* 2. Huge PORTFOLIO Text Layer */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-20 md:z-10 select-none"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tight text-[#84b2de] mix-blend-multiply opacity-60"
        >
          PORTFOLIO
        </motion.h1>
      </motion.div>

      {/* Main Content Layout (Mobile: col-reverse, Desktop: row) */}
      <div className="relative w-full max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-16 lg:px-24 h-full pt-12 md:pt-0">
        
        {/* LEFT: Typography & Info */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full md:w-5/12 flex flex-col justify-center relative z-30 pb-20 md:pb-0"
        >
          <motion.div variants={fadeUp} className="relative mb-4 md:mb-8 -mt-[18vh] md:mt-0">
            <h2 
              className="text-6xl md:text-8xl lg:text-[110px] font-black text-white tracking-tight"
              style={{ textShadow: "0 25px 60px rgba(74, 128, 240, 0.7), 0 12px 24px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)" }}
            >
              郑子琪
            </h2>
            <div 
              className="absolute -bottom-6 md:-bottom-10 right-10 md:right-20 text-4xl md:text-6xl text-[#ff5c93] md:text-[#f395b6] drop-shadow-md md:drop-shadow-none opacity-100 md:opacity-90"
              style={{ fontFamily: "'Dancing Script', cursive", textShadow: "0 8px 20px rgba(243, 149, 182, 0.4)" }}
            >
              Portfolio
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="text-lg md:text-2xl font-bold text-white md:text-[#4A80F0] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-none tracking-[0.2em] mb-[26vh] md:mb-[22vh] lg:mb-[30vh]">
            ( 简历 <span className="text-white/90 md:text-[#3b5791]">&</span> 作品集 )
          </motion.div>

          {/* Education Info */}
          <motion.div variants={fadeUp} className="space-y-4 mb-16 text-[#1e3465] font-bold">
            <div className="flex items-center gap-6 pb-4 border-b border-[#4A80F0]/20">
              <span className="text-[#4A80F0] font-black w-12 text-lg">本科</span>
              <span className="text-lg md:text-xl font-extrabold tracking-wider flex-1">吉林艺术学院</span>
              <span className="opacity-80 text-sm md:text-base font-semibold">2016 - 2020</span>
            </div>
            <div className="flex items-center gap-6 pb-4 border-b border-[#4A80F0]/20">
              <span className="text-[#4A80F0] font-black w-12 text-lg">硕士</span>
              <span className="text-lg md:text-xl font-extrabold tracking-wider flex-1">澳门理工大学</span>
              <span className="opacity-80 text-sm md:text-base font-semibold">2025 - 2027</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-base md:text-lg font-black tracking-wider text-[#1e293b]">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#4A80F0] font-bold uppercase tracking-widest">Email</span>
              <span>1041693868@qq.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#4A80F0] font-bold uppercase tracking-widest">WeChat</span>
              <span>zx124357689</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Visual Assets (Character & Badge) */}
        <div className="w-full md:w-7/12 h-[55vh] md:h-[85vh] relative flex justify-center items-end md:items-center z-10 md:z-20 mb-8 md:mb-0">
          
          {/* 3. Character Layer with Breathing & Parallax */}
          <motion.div 
            style={{ 
              x: charX, 
              y: charY,
              rotateX: charRotateX,
              rotateY: charRotateY,
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-0 w-full h-full flex justify-center items-end origin-center"
          >
            {/* Breathing Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative flex justify-center"
            >
              <img 
                src="https://i.postimg.cc/tCT8Y2Fp/ren-wu2.png" 
                alt="郑子琪 Character"
                className="scale-[1.35] md:scale-100 h-[95%] md:h-[110%] w-auto object-contain object-top md:object-center drop-shadow-2xl origin-top md:origin-bottom translate-y-[5%] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_95%)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_95%)] md:[-webkit-mask-image:none] md:[mask-image:none]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

