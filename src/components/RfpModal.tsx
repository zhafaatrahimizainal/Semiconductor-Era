import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2, FileText, Lock } from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNode?: string;
  initialNote?: string;
}

export const RfpModal: React.FC<RfpModalProps> = ({
  isOpen,
  onClose,
  defaultNode = '1.8nm Gate-All-Around (GAA)',
  initialNote = ''
}) => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [node, setNode] = useState(defaultNode);
  const [volume, setVolume] = useState('500 - 2,000 WSPM');
  const [packaging, setPackaging] = useState('3D Hybrid Bonding');
  const [ndaRequired, setNdaRequired] = useState(true);
  const [notes, setNotes] = useState(initialNote);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  // Update default node if prop changes
  useEffect(() => {
    if (defaultNode) setNode(defaultNode);
    if (initialNote) setNotes(initialNote);
  }, [defaultNode, initialNote]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate foundry security handshake & ticket generation
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setTicketRef(`RFP-FAB01-${randomCode}`);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#181917] border border-[#2C2C2A] rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfp-title"
      >
        {/* Header Bar */}
        <div className="bg-[#111210] border-b border-[#2C2C2A] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8622A]" />
            <h3 id="rfp-title" className="font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wider text-[#EDE9E0]">
              Foundry Request for Proposal (RFP)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#EDE9E0]/60 hover:text-white rounded-lg hover:bg-[#2C2C2A] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-bold block mb-1">
                  SECURE FOUNDRY HANDSHAKE ESTABLISHED
                </span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-3xl uppercase text-[#EDE9E0]">
                  Proposal Successfully Dispatched
                </h4>
                <p className="text-sm text-[#EDE9E0]/70 font-sans mt-2 max-w-md mx-auto">
                  Your tapeout and wafer volume request has been routed to our Lead Foundry Architect at Austin Fab 01.
                </p>
              </div>

              {/* Reference Box */}
              <div className="bg-[#111210] border border-[#2C2C2A] rounded-xl p-4 max-w-sm mx-auto font-mono text-xs space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span className="text-[#EDE9E0]/50">TICKET REF:</span>
                  <span className="text-[#E8622A] font-bold">{ticketRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#EDE9E0]/50">SECURITY:</span>
                  <span className="text-emerald-400">256-Bit Mutual NDA Queue</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#EDE9E0]/50">EST. RESPONSE:</span>
                  <span className="text-[#EDE9E0]">&lt; 24 Hours</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-xl font-bold transition-colors cursor-pointer"
                >
                  Return to Fab Overview
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                    Lead Architect / Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Elena Vance"
                    className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl px-4 py-2.5 text-sm text-[#EDE9E0] font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@quantumcompute.io"
                    className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl px-4 py-2.5 text-sm text-[#EDE9E0] font-sans outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                  Organization / Enterprise Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Apex Microelectronics Ltd."
                  className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl px-4 py-2.5 text-sm text-[#EDE9E0] font-sans outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                    Target Process Node
                  </label>
                  <select
                    value={node}
                    onChange={(e) => setNode(e.target.value)}
                    className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl px-4 py-2.5 text-xs font-mono text-[#EDE9E0] outline-none transition-colors cursor-pointer"
                  >
                    <option value="1.8nm Gate-All-Around (GAA)">1.8nm Gate-All-Around (High-NA EUV)</option>
                    <option value="3nm FinFET High-Performance">3nm FinFET High-Performance</option>
                    <option value="5nm Automotive Grade (AEC-Q100)">5nm Automotive Grade (AEC-Q100)</option>
                    <option value="Silicon Photonics Hybrid">Silicon Photonics Co-Packaged</option>
                    <option value="Custom MPW Shuttle Run">Multi-Project Wafer (MPW) Shuttle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                    Estimated Wafer Starts / Month
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl px-4 py-2.5 text-xs font-mono text-[#EDE9E0] outline-none transition-colors cursor-pointer"
                  >
                    <option value="< 100 WSPM (Engineering Prototype)">&lt; 100 WSPM (Engineering Prototype)</option>
                    <option value="100 - 500 WSPM">100 - 500 WSPM</option>
                    <option value="500 - 2,000 WSPM">500 - 2,000 WSPM</option>
                    <option value="2,000+ WSPM (High-Volume Production)">2,000+ WSPM (High-Volume Production)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#EDE9E0]/70 mb-1.5">
                  Technical Specifications &amp; Project Description
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Target die size, memory interposer requirements, expected tapeout quarter, or GDSII readiness..."
                  className="w-full bg-[#111210] border border-[#2C2C2A] focus:border-[#E8622A] rounded-xl p-3 text-xs font-mono text-[#EDE9E0] outline-none transition-colors"
                />
              </div>

              {/* Security & Mutual NDA */}
              <div className="flex items-center gap-3 p-3 bg-[#111210] rounded-xl border border-[#2C2C2A]">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  checked={ndaRequired}
                  onChange={(e) => setNdaRequired(e.target.checked)}
                  className="w-4 h-4 accent-[#E8622A] rounded cursor-pointer"
                />
                <label htmlFor="ndaCheckbox" className="text-xs text-[#EDE9E0]/80 font-sans cursor-pointer flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#E8622A]" />
                  <span>Execute mutual corporate Non-Disclosure Agreement (NDA) prior to technical review.</span>
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#EDE9E0]/40 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Encrypted Foundry Transmission</span>
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase font-bold tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-xl transition-all shadow-[0_0_20px_rgba(232,98,42,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Encrypting Proposal...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
