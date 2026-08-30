import { motion } from 'motion/react';
import { MarqueeGallery } from './MarqueeGallery';
import { MediaType } from '../App';
import { Play } from 'lucide-react';

// Using picsum seeds to generate consistent random images for our 20 slots
const images3D = [
  "https://i.postimg.cc/1RknCYMt/jimeng-2026-08-28-3896-hua-mian-xiu-gai-jiang-hua-mian-zhong-de-suo-you-ying-wen-xiu-gai-wei-dui-ying-de-zhong-wen-bao-chi-zi-ti-feng-ge-yu-pai-ban-wan-quan-bu-bian-ji-yu.png",
  "https://i.postimg.cc/d0VLZMQy/jimeng-2026-08-28-9604-hua-mian-jing-xiu-qiang-hua-zhong-wen-zi-ti-de-san-wei-kong-jian-tou-shi-yu-fa-guang-te-xiao-ji-yu-tu-pian1jin-xing-jing-xiu-1.png",
  "https://i.postimg.cc/bJKJ5sxM/jimeng-2026-08-28-6562-hua-mian-xiu-gai-jiang-hua-mian-zhong-de-suo-you-ying-wen-xiu-gai-wei-dui-ying-de-zhong-wen-bao-chi-zi-ti-feng-ge-yu-pai-ban-wan-quan-bu-bian-ji-yu.png",
  "https://i.postimg.cc/021jdK2G/jimeng-2026-08-28-7094-hua-mian-xiu-gai-jiang-hua-mian-zhong-de-suo-you-ying-wen-xiu-gai-wei-dui-ying-de-zhong-wen-bao-chi-zi-ti-feng-ge-yu-pai-ban-wan-quan-bu-bian-ji-yu.png",
  "https://i.postimg.cc/d03Vt84P/gao-qing-ban-ben.png",
  "https://i.postimg.cc/jjDRrRSY/01.png",
  "https://i.postimg.cc/c4TWgvvb/03.png",
  "https://i.postimg.cc/MHDCQLpF/02.png",
  "https://i.postimg.cc/5tCD3ytN/04.png"
];

const videoUrl = "https://g7d7v3.ma3you.top/a/RmpBB0D/";
const videoCover = "https://i.postimg.cc/4427FYKt/jimeng-2026-08-29-5461-image-bang-wo-diao-zheng-gao-qing-yi-xie.png";

export function Portfolio({ onMediaClick }: { onMediaClick: (media: MediaType) => void }) {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[#4A80F0] text-xs font-bold uppercase tracking-widest"
        >
          AI Image Portfolio / AI生图作品集
        </motion.h3>
        <p className="text-[10px] opacity-60 text-[#334155] font-bold">9 Selected Pieces / 01 - 09</p>
      </div>
      <MarqueeGallery images={images3D} onImageClick={(url) => onMediaClick({ url, type: 'image' })} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 mb-8 flex justify-between items-end">
        <h3 className="text-[#4A80F0] text-xs font-bold uppercase tracking-widest">AI Video Portfolio / AI生视频作品集</h3>
        <p className="text-[10px] opacity-60 text-[#334155] font-bold">1 Selected Piece / 01</p>
      </div>
      
      {/* Video Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="w-64 md:w-80 h-96 overflow-hidden relative group bg-white border-8 border-white shadow-lg rounded-2xl cursor-pointer"
          whileHover={{ scale: 0.98, y: -5 }}
          onClick={() => onMediaClick({ url: videoUrl, type: 'video' })}
        >
          <img
            src={videoCover}
            alt="Video Preview"
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 text-[10px] font-bold uppercase text-white pointer-events-none drop-shadow-md">
            Artwork 01
          </div>
        </motion.div>
      </div>
    </section>
  );
}
