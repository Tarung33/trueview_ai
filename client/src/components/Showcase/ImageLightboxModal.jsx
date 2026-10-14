import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, onClose, currentItem, onNext, onPrev, hasNext, hasPrev }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Dialog Window */}
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-[#080e1c] rounded-2xl border border-blue-900/50 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#050914] border-b border-blue-900/40 text-white">
          <div className="flex items-center gap-3 truncate mr-4">
            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded border border-blue-800/40 uppercase">
              {currentItem.category || 'Inspection'}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
              {currentItem.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close viewer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display Area with Prev/Next Navigation */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] max-h-[68vh] p-2">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="max-w-full max-h-[66vh] object-contain rounded-md"
          />

          {/* Previous Button */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/10 shadow-lg transition-all"
              title="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-white/10 shadow-lg transition-all"
              title="Next image (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-5 py-4 bg-[#050914] border-t border-blue-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="text-slate-300 font-normal leading-relaxed max-w-3xl">
            {currentItem.caption}
          </p>

          <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-slate-400">
            {currentItem.route && (
              <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                Route: {currentItem.route}
              </span>
            )}
            <span className="hidden md:inline">Use ← → keys to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
