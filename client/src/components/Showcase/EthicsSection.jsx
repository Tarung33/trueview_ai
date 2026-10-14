import React from 'react';
import { Scale, ShieldCheck, EyeOff, FileText, CheckCircle2 } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function EthicsSection() {
  const ethics = showcaseContent.ethics;

  return (
    <section id="ethics" className="py-20 sm:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Callout Box */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5 text-blue-700" />
            <span>{ethics.tagline}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            {ethics.title}
          </h2>

          <blockquote className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
            "{ethics.quote}"
          </blockquote>
        </div>

        {/* 4 Ethical Pillars */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {ethics.points.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 shadow-sm transition-all duration-150"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  {point.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
