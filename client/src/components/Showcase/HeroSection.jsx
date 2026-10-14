import React, { useState } from 'react';
import { ArrowDown, ExternalLink, ShieldCheck, Activity, Eye, Mic, MonitorCheck, Cpu, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import Github from './GithubIcon';
import { showcaseContent } from '../../data/showcaseContent';

export default function HeroSection({ onOpenLightbox }) {
  const [activeVisualTab, setActiveVisualTab] = useState('identity');

  const visualTabs = [
    {
      id: 'identity',
      label: 'Pre-Exam Gate',
      title: 'Biometric Pre-Session Verification',
      badge: 'Fail-Closed Gate',
      badgeColor: 'text-emerald-400 bg-emerald-950/70 border-emerald-500/30',
      image: '/snapshots/11_pre_exam_identity_check.jpg',
      caption: 'Real pre-session verification checkpoint: YuNet face detection, MiniFASNet PAD liveness check, MediaPipe blink test, and 128-D SFace matching.',
      telemetry: {
        face: 'Detected ✓',
        liveness: 'Live Verified ✓ (Score 0.994)',
        blinks: 'Blink Detected ✓ (15 Blinks)',
        voice: 'Voice Profile Registered ✓',
      },
    },
    {
      id: 'perception',
      label: 'Gaze & Pose',
      title: 'Multimodal Iris & Attention Analytics',
      badge: 'Real-Time Inference',
      badgeColor: 'text-blue-400 bg-blue-950/70 border-blue-500/30',
      image: '/snapshots/04_eye_gaze_center_focus.jpg',
      caption: 'Continuous spatial gaze estimation: Iris center tracking, Eye Aspect Ratio (EAR: 0.441), and cumulative focus duration monitor.',
      telemetry: {
        direction: 'Center (84% conf)',
        ear: 'Left: 0.436 | Right: 0.447',
        state: 'Focused (Duration 00:00:43)',
        latency: '136 ms pipeline latency',
      },
    },
    {
      id: 'violation',
      label: 'Object Violation',
      title: 'YOLOv11 Prohibited Device Detection',
      badge: 'Violation Alert',
      badgeColor: 'text-amber-400 bg-amber-950/70 border-amber-500/30',
      image: '/snapshots/08_object_detection_phone_violation.jpg',
      caption: 'Workspace scan: Ultralytics YOLOv11 instantly detects Phone #3 (66% confidence) inside candidate workspace and dispatches alert.',
      telemetry: {
        candidate: 'Person #1 (93% conf)',
        device: 'PHONE #3 [66% VERIFIED]',
        workspace: 'Mobile device detected in frame',
        action: 'Alert pushed to proctor log',
      },
    },
  ];

  const currentTab = visualTabs.find((t) => t.id === activeVisualTab) || visualTabs[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#060b16] text-white overflow-hidden bg-tech-grid">
      {/* Background Radial Ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Academic Credibility Tag */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">{showcaseContent.hero.wordmark}</span>
            <span className="text-slate-500">|</span>
            <span>B.Tech Final Year Engineering Capstone</span>
          </div>
          <span className="hidden md:inline-block text-xs font-mono text-slate-400">
            {showcaseContent.meta.department}
          </span>
        </div>

        {/* Hero Grid: Typography on Left, Bespoke Telemetry Monitor on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Smarter Proctoring. <br />
              <span className="text-blue-400 font-extrabold">Stronger Trust.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              A context-aware multimodal AI monitoring platform combining presentation-attack detection, facial pose & gaze analytics, acoustic speaker verification, and server-authoritative event assessment to protect academic integrity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={showcaseContent.hero.ctaPrimary.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-md shadow-blue-500/20 border border-blue-400/30 transition-all duration-150 hover:-translate-y-0.5"
              >
                <span>{showcaseContent.hero.ctaPrimary.label}</span>
                <ArrowDown className="w-4 h-4 text-blue-200" />
              </a>

              <a
                href={showcaseContent.hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 rounded-lg border border-slate-700/80 transition-all duration-150 hover:-translate-y-0.5 shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>{showcaseContent.hero.ctaSecondary.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Fast Quantitative Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {showcaseContent.hero.quickMetrics.map((qm) => (
                <div key={qm.label} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    {qm.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">{qm.label}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{qm.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Telemetry Monitor System Interface */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#091122] border border-blue-900/40 shadow-2xl shadow-black/80 overflow-hidden">
              {/* Telemetry Frame Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#060b17] border-b border-blue-900/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-200 tracking-wider uppercase">
                    Session Telemetry HUD
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-950/80 text-blue-300 rounded border border-blue-800/40">
                    EXAM MODE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="hidden sm:inline">RTT: 2ms</span>
                  <span className="px-1.5 py-0.5 bg-slate-800/80 rounded text-slate-300">
                    ID: TRV-5172
                  </span>
                </div>
              </div>

              {/* Real Project Visual Preview Container */}
              <div className="relative bg-[#050914] p-3 sm:p-4">
                <div className="relative rounded-lg overflow-hidden border border-slate-800 group bg-slate-950">
                  <img
                    src={currentTab.image}
                    alt={currentTab.title}
                    className="w-full h-56 sm:h-72 object-cover object-top transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                    onClick={() => onOpenLightbox && onOpenLightbox(currentTab.image, currentTab.title, currentTab.caption)}
                  />
                  
                  {/* Floating Telemetry Stamp */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    <span>{currentTab.title}</span>
                  </div>

                  {/* Click to expand badge */}
                  <button
                    onClick={() => onOpenLightbox && onOpenLightbox(currentTab.image, currentTab.title, currentTab.caption)}
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-slate-900/90 hover:bg-blue-600 text-[11px] font-mono text-white border border-white/10 transition-colors shadow"
                  >
                    Click to Zoom
                  </button>
                </div>

                {/* Interactive Signal Switcher Tabs */}
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
                    Live Feeds:
                  </span>
                  {visualTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveVisualTab(tab.id)}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-all duration-150 ${
                        activeVisualTab === tab.id
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Telemetry Readouts Grid */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono bg-[#070d1c] p-3 rounded-lg border border-slate-800/80">
                  {Object.entries(currentTab.telemetry).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[10px] uppercase text-slate-400 tracking-wider">
                        {key}
                      </span>
                      <span className="text-slate-200 font-medium truncate">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Signal Chain Indicator */}
              <div className="px-4 py-2.5 bg-[#060b17] border-t border-blue-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-400">Zero-Trust Signal Fusion</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Server Authoritative
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
