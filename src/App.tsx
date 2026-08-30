/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';

export type MediaType = { url: string; type: 'image' | 'video' };

export default function App() {
  const [lightboxMedia, setLightboxMedia] = useState<MediaType | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f0fa] to-[#fdeff2] text-[#1e293b] font-sans selection:bg-[#4A80F0]/30 selection:text-[#4A80F0] relative overflow-hidden">
      <Hero />
      {/* Pink Transition Bridge to blend Hero into the page background */}
      <div className="w-full h-48 md:h-72 bg-gradient-to-b from-[#f8e8eb] to-transparent pointer-events-none -mb-48 md:-mb-72 relative z-0" />
      <About />
      <Portfolio onMediaClick={setLightboxMedia} />
      <Footer />
      <Lightbox media={lightboxMedia} onClose={() => setLightboxMedia(null)} />
    </div>
  );
}
