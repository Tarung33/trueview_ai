import React from 'react';
import { ShieldAlert, Activity, Smartphone, Lock, CheckCircle2, UserCheck, FileCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function ProjectOverviewSection() {
  const iconMap = {
    ShieldAlert,
    Activity,
    Smartphone,
    Lock,
  };

  return (
    <section id="overview" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            {showcaseContent.overview.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            {showcaseContent.overview.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal">
            {showcaseContent.overview.lead}
          </p>
        </div>

        {/* 4 Core Challenges Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseContent.overview.challenges.map((challenge) => {
            const Icon = iconMap[challenge.icon] || ShieldAlert;
            return (
              <div
                key={challenge.id}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The TrueView AI Proposed Solution: 4 Architectural Pillars */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                The TrueView AI Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                Multimodal Sensory Fusion & Server Authority
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than relying on isolated point solutions that generate erratic false alarms, TrueView AI harmonizes biometric gates, continuous computer vision, and server-authoritative policies into a unified, auditable trust framework.
              </p>
              
              <div className="pt-2">
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <span>Explore full technical architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {showcaseContent.overview.solutionPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all duration-200"
                >
                  <div className="text-2xl font-bold font-mono text-blue-600 mb-2">
                    {pillar.number}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparent Human Review Callout */}
        <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
                <UserCheck className="w-4 h-4" />
                <span>Ethical Human-in-the-Loop Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI Informs. Certified Humans Decide.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                TrueView AI is explicitly designed as an assistive observability tool. The system records immutable forensic timestamps, generates cryptographic integrity certificates, and surfaces behavioral telemetry — but never replaces educators or institutes in disciplinary adjudication.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audited PDF Session Certificates</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Timestamped Video/Audio Logs</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Proctor Override & Live Intercom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
