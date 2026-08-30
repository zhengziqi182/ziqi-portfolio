import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { MediaType } from '../App';

export function Lightbox({ media, onClose }: { media: MediaType | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {media && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={onClose}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={onClose}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          {media.type === 'image' ? (
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={media.url}
              alt="Enlarged Work"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[1200px] h-[40vh] md:h-auto md:aspect-video max-h-[85vh] bg-black shadow-2xl rounded-lg overflow-hidden flex items-center justify-center relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={media.url}
                className="w-full h-full border-none absolute inset-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
