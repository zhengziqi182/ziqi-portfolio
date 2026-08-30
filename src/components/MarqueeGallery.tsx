import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function MarqueeGallery({ 
  images, 
  onImageClick, 
  direction = 'normal' 
}: { 
  images: string[]; 
  onImageClick: (url: string) => void;
  direction?: 'normal' | 'reverse';
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    if (direction === 'reverse') {
      setTimeout(() => {
        slider.scrollLeft = slider.scrollWidth / 2;
      }, 50);
    }

    let animationFrameId: number;
    const speed = 1.5;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        if (direction === 'normal') {
          slider.scrollLeft += speed;
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
          }
        } else {
          slider.scrollLeft -= speed;
          if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, direction]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragDistance(0);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    setDragDistance(prev => prev + Math.abs(e.movementX));
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const displayImages = [...images, ...images];

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto hide-scrollbar gap-6 md:gap-8 py-8 px-4 cursor-grab active:cursor-grabbing w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {displayImages.map((src, idx) => (
        <motion.div
          key={idx}
          className="flex-shrink-0 w-64 md:w-80 h-96 overflow-hidden relative group bg-white border-8 border-white shadow-lg rounded-2xl"
          whileHover={{ scale: 0.98, y: -5 }}
          onClick={() => {
            if (dragDistance < 5) onImageClick(src);
          }}
        >
          <img
            src={src}
            alt={`Gallery image ${idx}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none rounded-xl"
            draggable={false}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 rounded-xl" />
          <div className="absolute bottom-4 left-4 text-[10px] font-bold uppercase text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
            Artwork {(idx % 20) + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
