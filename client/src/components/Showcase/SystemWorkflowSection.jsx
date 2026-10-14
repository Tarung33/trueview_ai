import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Eye, Mic, Monitor, Server, Database, UserCheck, Layers, Cpu, Laptop } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function SystemWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = showcaseContent.workflow.steps;

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            {showcaseContent.workflow.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            {showcaseContent.workflow.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {showcaseContent.workflow.subtitle}
          </p>
        </div>

        {/* 6-Step Process Flow Diagram (Horizontal on Desktop, Stacked on Mobile) */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        STEP {step.step}
                      </span>
                      {idx < steps.length - 1 && (
                        <ArrowRight className={`w-3.5 h-3.5 hidden lg:block ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      )}
                    </div>
                    <h3 className={`text-sm font-bold tracking-tight mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[11px] leading-snug line-clamp-3 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {step.category}
                    </p>
                  </div>
                  <div className={`mt-3 pt-2 border-t text-[10px] font-mono truncate ${
                    isActive ? 'border-white/20 text-blue-100' : 'border-slate-100 text-slate-400'
                  }`}>
                    {step.tech.split('•')[0]}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Expansion Card */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    Detailed Stage Breakdown — Step {steps[activeStep].step}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-mono text-slate-500">{steps[activeStep].category}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  {steps[activeStep].title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Associated Technologies:
                </div>
                <div className="text-xs font-mono font-semibold text-slate-800 leading-relaxed">
                  {steps[activeStep].tech}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Responsive SVG Architecture Topology Diagram */}
        <div id="architecture" className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
              System Topology Diagram
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Decoupled Three-Service Architecture
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              Clean separation of concerns between client sensory acquisition, backend policy arbitration, and asynchronous Python computer-vision microservices.
            </p>
          </div>

          {/* Architecture Visual Grid (Desktop 3-Column Pipeline / Mobile Stack) */}
          <div className="relative rounded-2xl bg-[#080e1d] text-white p-6 sm:p-10 border border-slate-800 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              
              {/* Service 1: Client Application */}
              <div className="p-6 rounded-xl bg-[#0d162d] border border-blue-900/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">
                    PORT :5173
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Client Observation Tier</h4>
                  <p className="text-xs font-mono text-slate-400">React 19 • Vite 8 • MediaPipe Tasks</p>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Webcam frame sampling (throttled)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>MediaPipe Face Landmarker blendshapes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>16kHz PCM audio microphone recorder</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Browser Visibility & Tab Switch hook</span>
                  </li>
                </ul>
              </div>

              {/* Service 2: Backend Orchestration */}
              <div className="p-6 rounded-xl bg-[#0d162d] border border-blue-900/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800/40">
                    PORT :5000
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Real-Time Gateway & Engine</h4>
                  <p className="text-xs font-mono text-slate-400">Node.js • Express 5 • Socket.IO 4</p>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Session state machine & room cluster</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Zero-trust policy arbitration (4 modes)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Trust score decay & auto-suspension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>MongoDB Mongoose (isolated biometrics)</span>
                  </li>
                </ul>
              </div>

              {/* Service 3: AI Inference Microservice */}
              <div className="p-6 rounded-xl bg-[#0d162d] border border-blue-900/40 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                    PORT :8000
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">AI Perception Core</h4>
                  <p className="text-xs font-mono text-slate-400">FastAPI • OpenCV ONNX • YOLOv11</p>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>MiniFASNetV2 anti-spoofing (PAD: 39ms)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>OpenCV YuNet & SFace 128-D matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Ultralytics YOLOv11 object detector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Energy/ZCR VAD & Acoustic vector</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Data Contracts Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Data Flow:</span>
                <span>Client (Frame/Audio) → FastAPI :8000 → AI Event → Socket.IO :5000 → Reviewer Dashboard</span>
              </div>
              <div className="text-slate-400">
                <span>Fail-Closed on AI or DB Timeout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
