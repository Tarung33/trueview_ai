import React, { useState } from 'react';
import { Play, Video, Clock, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function VideoDemoSection({ onOpenLightbox }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Chapter milestones from docs/DEMO_GUIDE.md
  const demoChapters = [
    { time: "00:00", title: "System Introduction & Architecture", desc: "Overview of React client, Node gateway, and FastAPI AI service." },
    { time: "01:15", title: "3-Stage Registration & Enrollment", desc: "Password submission, MiniFASNet PAD face registration, and 16kHz PCM voice capture." },
    { time: "03:40", title: "Presentation-Attack Challenge Test", desc: "Attempting photo spoof with printed photo; system triggers live FAIL CLOSED rejection." },
    { time: "05:10", title: "Pre-Exam Identity Verification Gate", desc: "Candidate identity verification and liveness blink check before room entry." },
    { time: "07:30", title: "Live EXAM Mode Monitoring & Violations", desc: "Gaze deviation, head pose distraction, and YOLOv11 mobile phone detection alerts." },
    { time: "10:15", title: "Tab Switch Enforcement & Auto-Suspension", desc: "Tab switch warnings (1/3 to 3/3) leading to server-side session termination." },
    { time: "12:00", title: "Proctor Dashboard & Forensic PDF Report", desc: "Auditing timestamped alert logs and generating certified session report." },
  ];

  return (
    <section id="demo" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            System Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Demonstration Video & Session Walkthrough
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A comprehensive reproducible evaluation sequence demonstrating 3-stage biometric enrollment, photo-spoof rejection, live proctored exam monitoring, and automated forensic report generation.
          </p>
        </div>

        {/* Video Player Frame Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Frame (Player Mockup / Real Video Area) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden aspect-video group">
              {/* Cover Preview Image from Real Session */}
              <img
                src="/snapshots/09_live_monitoring_exam_mode.jpg"
                alt="TrueView AI Demonstration Preview"
                className="w-full h-full object-cover object-top opacity-75 group-hover:opacity-85 transition-opacity"
              />

              {/* Player Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
                
                {/* Top Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-xs font-mono text-white border border-white/10">
                    <Video className="w-3.5 h-3.5 text-blue-400" />
                    <span>Project Demonstration Recording</span>
                  </div>
                  <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                    Duration: ~14 Mins
                  </span>
                </div>

                {/* Center Play Button & Callout */}
                <div className="text-center space-y-3">
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox("/snapshots/09_live_monitoring_exam_mode.jpg", "TrueView AI Demonstration Preview", "Real live session capture demonstrating EXAM mode monitoring with real-time HUD and tab-switch verification.")}
                    className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 border border-blue-400/40 group-hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Play className="w-7 h-7 text-white fill-current ml-1" />
                  </div>
                  <div className="text-sm font-semibold text-white tracking-tight">
                    Recorded Live Session Walkthrough
                  </div>
                  <p className="text-xs text-slate-300 font-mono max-w-md mx-auto">
                    Prepared for academic defense & capstone project viva demonstration
                  </p>
                </div>

                {/* Bottom Timeline Mockup */}
                <div className="space-y-2">
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-2/5 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Follows protocol in docs/DEMO_GUIDE.md</span>
                    <span>1080p 60fps WebRTC Feed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note for updating video */}
            <div className="mt-3 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>To embed a video link, update <code className="text-slate-700">showcaseContent.js</code></span>
              <a
                href="https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-/blob/main/docs/DEMO_GUIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 font-semibold"
              >
                <span>Read 20-Step Demo Guide</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Chapters Sidebar */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900 tracking-tight uppercase font-mono">
                Demonstration Chapters
              </h3>
            </div>

            <div className="space-y-3 divide-y divide-slate-200/80">
              {demoChapters.map((chapter) => (
                <div key={chapter.time} className="pt-3 first:pt-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                      {chapter.time}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                      {chapter.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug pl-0.5">
                    {chapter.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
