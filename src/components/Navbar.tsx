import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRfp: (defaultNode?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300 rounded-full px-5 py-3 md:px-8 md:py-3.5 flex items-center justify-between ${
          scrolled
            ? 'bg-[#181917]/90 backdrop-blur-md border border-[#2C2C2A] shadow-2xl'
            : 'bg-[#111210]/60 backdrop-blur-sm border border-[#2C2C2A]/50'
        }`}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-lg md:text-xl font-bold tracking-tight text-[#EDE9E0] group font-['Barlow_Condensed'] uppercase"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8622A] animate-pulse" />
          <span className="tracking-wide">SemiconductorEra</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#EDE9E0]/70">
          <a
            href="#expertise"
            className="hover:text-[#E8622A] transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#philosophy"
            className="hover:text-[#E8622A] transition-colors"
          >
            Engineering Rigor
          </a>
          <a
            href="#process"
            className="hover:text-[#E8622A] transition-colors"
          >
            Execution Pipeline
          </a>
          <a
            href="#calculator"
            className="hover:text-[#E8622A] transition-colors"
          >
            Node Calculator
          </a>
          <a
            href="#metrics"
            className="hover:text-[#E8622A] transition-colors"
          >
            Yield & Track Record
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenRfp()}
            className="group relative inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs font-mono uppercase tracking-wider text-[#EDE9E0] bg-[#E8622A] hover:bg-[#D0531F] rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(232,98,42,0.3)] hover:shadow-[0_0_25px_rgba(232,98,42,0.5)] active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Request Foundry RFP</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#EDE9E0] hover:text-[#E8622A] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111210]/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-xl font-['Barlow_Condensed'] uppercase tracking-wider text-[#EDE9E0]">
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E8622A] py-2 border-b border-[#2C2C2A]"
            >
              Capabilities & Cleanroom
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E8622A] py-2 border-b border-[#2C2C2A]"
            >
              Engineering Rigor & Credentials
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E8622A] py-2 border-b border-[#2C2C2A]"
            >
              Execution Pipeline
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E8622A] py-2 border-b border-[#2C2C2A]"
            >
              Interactive Node Calculator
            </a>
            <a
              href="#metrics"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E8622A] py-2 border-b border-[#2C2C2A]"
            >
              Yield & Proven Track Record
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfp();
              }}
              className="mt-4 flex items-center justify-center gap-2 py-3 px-6 text-sm font-mono uppercase tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-full"
            >
              <span>Submit Foundry Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
