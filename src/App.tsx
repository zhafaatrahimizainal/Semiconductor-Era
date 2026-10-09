/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ExpertiseSection } from './components/ExpertiseSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessPipeline } from './components/ProcessPipeline';
import { FoundryCalculator } from './components/FoundryCalculator';
import { MetricsSection } from './components/MetricsSection';
import { Footer } from './components/Footer';
import { RfpModal } from './components/RfpModal';

export default function App() {
  const [rfpOpen, setRfpOpen] = useState(false);
  const [rfpNode, setRfpNode] = useState<string>('1.8nm Gate-All-Around (GAA)');
  const [rfpNote, setRfpNote] = useState<string>('');

  const handleOpenRfp = (defaultNode?: string, customNote?: string) => {
    if (defaultNode) setRfpNode(defaultNode);
    if (customNote) setRfpNote(customNote);
    setRfpOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111210] text-[#EDE9E0] font-sans overflow-x-hidden selection:bg-[#E8622A] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenRfp={handleOpenRfp} />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenRfp={() => handleOpenRfp()} />
        <MarqueeTicker />
        <ExpertiseSection onOpenRfp={handleOpenRfp} />
        <PhilosophySection onOpenRfp={() => handleOpenRfp()} />
        <ProcessPipeline onOpenRfp={handleOpenRfp} />
        <FoundryCalculator onOpenRfp={handleOpenRfp} />
        <MetricsSection onOpenRfp={() => handleOpenRfp()} />
      </main>

      {/* Footer */}
      <Footer onOpenRfp={() => handleOpenRfp()} />

      {/* Interactive Foundry RFP Consultation Modal */}
      <RfpModal
        isOpen={rfpOpen}
        onClose={() => setRfpOpen(false)}
        defaultNode={rfpNode}
        initialNote={rfpNote}
      />
    </div>
  );
}
