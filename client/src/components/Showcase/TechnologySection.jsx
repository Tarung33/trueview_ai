import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight, Cpu, Server, Laptop, Sliders } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function TechnologySection() {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Core Implemented':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Server-Authoritative':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'Core AI Engine':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <section id="technology" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            {showcaseContent.technology.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            {showcaseContent.technology.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {showcaseContent.technology.subtitle}
          </p>
        </div>

        {/* 3 Major Architectural Layers */}
        <div className="mt-14 space-y-8">
          {showcaseContent.technology.layers.map((layer) => (
            <div
              key={layer.role}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      {layer.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Port {layer.port}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getBadgeStyle(layer.status)}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{layer.status}</span>
                  </span>
                </div>
              </div>

              {/* Items in Layer */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {layer.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.purpose}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Neural Models & Fallback Architecture Transparency Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Model Availability & Fallback Transparency</span>
            </div>
            <h4 className="text-lg font-bold text-slate-950 tracking-tight">
              Graceful Degradation Without Misrepresentation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              When heavy optional neural models (such as SpeechBrain ECAPA-TDNN or Whisper) are not installed on a local deployment, TrueView AI automatically reports <code className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-slate-800 text-xs">available: false</code> and routes acoustic verification through a lightweight custom 128-D MFCC spectral fallback vector.
            </p>
          </div>
          <a
            href="https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-/blob/main/docs/AI_MODELS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Read docs/AI_MODELS.md</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
