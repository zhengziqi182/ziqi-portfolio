import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 bg-white/40 p-8 md:p-12 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md"
      >
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="w-full max-w-[220px]">
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-3 tracking-widest border-b border-[#4A80F0]/20 pb-2">About / 个人简介</h3>
            <h2 className="text-[32px] md:text-[36px] font-black leading-tight text-[#1e293b] mt-8 flex flex-col gap-1 md:gap-2">
              <span className="flex justify-between">
                <span>探</span><span>索</span><span>维</span><span>度</span><span>边</span><span>界</span>
              </span>
              <span className="flex justify-between">
                <span>重</span><span>塑</span><span>视</span><span>觉</span><span>体</span><span>验</span>
              </span>
            </h2>
          </div>
            
          <div className="mt-12 md:mt-0">
            <div className="w-full max-w-[220px] rounded-2xl overflow-hidden border border-white/80 shadow-md bg-white/50 backdrop-blur-sm relative group">
              <img 
                src="https://i.postimg.cc/ZqWCHcCq/guo-wang-jing-li-shu-li-02-7-AIGC-01.png" 
                alt="Resume Thumbnail"
                loading="lazy"
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <a 
                href={import.meta.env.BASE_URL + 'resume.pdf'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer"
              >
                <div className="opacity-0 group-hover:opacity-100 bg-white/95 text-[#4A80F0] text-xs font-bold px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  全屏预览 / 下载
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col gap-10 text-[#334155]">
          <div>
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-3 tracking-widest border-b border-[#4A80F0]/20 pb-2">Name / 姓名</h3>
            <p className="text-sm font-bold text-[#1e293b]">郑子琪 / Ziqi Zheng</p>
          </div>
          <div>
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-3 tracking-widest border-b border-[#4A80F0]/20 pb-2">Experience / 实习经历</h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                   <p className="text-sm font-bold text-[#1e293b]">炫图广州人工智能科技有限公司（AI图像创作）</p>
                   <p className="text-xs font-bold text-[#4A80F0] mt-1 sm:mt-0">2025.09-2026.09</p>
                </div>
                <p className="text-xs font-bold text-[#1e293b] mb-3 opacity-80">AI产品经理实习生</p>
                <div className="text-xs opacity-80 space-y-2 leading-relaxed">
                  <p><span className="font-bold">项目1 :</span> AI“POL”视频创作工具：对标LibTV，公司内部探索项目，创作AI视频、漫剧、短剧制作工具</p>
                  <p><span className="font-bold">项目2 :</span> AI“我的人生游戏加载界面”创意：捕捉小红书热门高赞传播AI主题，迅速研发我的游戏加载界面功能</p>
                  <p><span className="font-bold">项目3 :</span> AI“一键换装”功能：公司主要AIGC生图项目，站内常驻场景，支持一键换装影视角色公众人物IP</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[#4A80F0] text-xs font-bold uppercase mb-4 tracking-widest border-b border-[#4A80F0]/20 pb-2">Information / 个人信息</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-[#1e293b] mb-3">专业技能</p>
                <div className="flex flex-wrap gap-2">
                  {['Axure RP', '墨刀', 'Figma', '产品原型设计', 'PRD文档撰写', 'Word', 'Excel', 'PPT'].map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white/80 text-xs font-bold rounded border border-[#e2e8f0] text-[#475569] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1e293b] mb-3">AI技能</p>
                <div className="flex flex-wrap gap-2">
                  {['Coze智能体搭建', 'Dify智能体搭建', 'Agent LLM原理', 'AIGC产品', '产品分析', 'Demo生成及推动开发'].map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white/80 text-xs font-bold rounded border border-[#e2e8f0] text-[#475569] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1e293b] mb-3">荣誉奖项</p>
                <div className="flex flex-wrap gap-2">
                  {['CET4', '普通话二等甲级', '院级辩论赛优秀辩手', '国青省二奖', '亚洲设计学年奖银奖', '优秀毕业生'].map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white/80 text-xs font-bold rounded border border-[#e2e8f0] text-[#475569] shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
