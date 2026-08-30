export function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="bg-white/40 p-12 md:p-16 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md">
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#1e293b]">Get in touch</h2>
          <p className="text-[#4A80F0] font-bold text-sm uppercase tracking-widest">Let's create something extraordinary together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-2 tracking-widest border-b border-[#4A80F0]/20 pb-2 w-full max-w-[200px] md:max-w-none">Phone / 电话</h3>
            <p className="text-lg font-bold text-[#1e293b] mt-2">19198015076</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-2 tracking-widest border-b border-[#4A80F0]/20 pb-2 w-full max-w-[200px] md:max-w-none">Email / 邮箱</h3>
            <p className="text-lg font-bold text-[#1e293b] mt-2">1041693868@qq.com</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-4 tracking-widest border-b border-[#4A80F0]/20 pb-2 w-full max-w-[200px] md:max-w-none">WeChat / 微信</h3>
            <p className="text-sm font-bold text-[#1e293b] mb-3 tracking-wider">zx124357689</p>
            <div className="w-32 h-32 bg-white rounded-2xl p-2 shadow-sm border border-[#e2e8f0]">
              <img src="https://i.postimg.cc/q73N0s1S/wei-xin.png" alt="WeChat QR Code" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#64748b]">© 2026 Ziqi Zheng. All rights reserved.</p>
      </div>
    </footer>
  );
}
