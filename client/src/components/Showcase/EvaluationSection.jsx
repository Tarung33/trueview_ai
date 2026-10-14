import React, { useState } from 'react';
import { BarChart3, CheckCircle2, AlertTriangle, Clock, Cpu, Users, ShieldCheck, Activity, Info, ArrowUpRight } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function EvaluationSection() {
  const [activeTab, setActiveTab] = useState('benchmarks');

  const concurrencyData = [
    { level: '1 Client', attempted: 1, connected: 1, joinMs: 1, rttMs: 2, p95Ms: 2, failures: 0 },
    { level: '5 Clients', attempted: 5, connected: 5, joinMs: 1, rttMs: 1, p95Ms: 2, failures: 0 },
    { level: '10 Clients', attempted: 10, connected: 10, joinMs: 1, rttMs: 1, p95Ms: 2, failures: 0 },
    { level: '25 Clients', attempted: 25, connected: 25, joinMs: 1, rttMs: 1, p95Ms: 2, failures: 0 },
    { level: '50 Clients', attempted: 50, connected: 50, joinMs: 1, rttMs: 1, p95Ms: 2, failures: 0 },
  ];

  return (
    <section id="evaluation" className="py-24 sm:py-32 bg-[#060b16] text-white border-t border-slate-800 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-blue-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            {showcaseContent.evaluation.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {showcaseContent.evaluation.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {showcaseContent.evaluation.subtitle}
          </p>
        </div>

        {/* Evaluation Category Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold rounded-lg transition-all duration-150 ${
              activeTab === 'benchmarks'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Empirical Metric Cards
          </button>
          <button
            onClick={() => setActiveTab('concurrency')}
            className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold rounded-lg transition-all duration-150 ${
              activeTab === 'concurrency'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Socket.IO Concurrency Load Test
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold rounded-lg transition-all duration-150 ${
              activeTab === 'resources'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Server Resource Usage
          </button>
          <button
            onClick={() => setActiveTab('caveats')}
            className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold rounded-lg transition-all duration-150 ${
              activeTab === 'caveats'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Academic Limitations & Caveats
          </button>
        </div>

        {/* Tab 1: Empirical Metric Cards */}
        {activeTab === 'benchmarks' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {showcaseContent.evaluation.verifiedMetrics.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-[#091122] border border-blue-900/40 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.unit}</span>
                  </div>
                  <div className="text-3xl font-bold font-mono text-white tracking-tight mb-1">
                    {item.metric}
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 tracking-tight mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    {item.benchmark}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-tight">
                  <span className="text-slate-400">Context:</span> {item.caveat}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Socket.IO Concurrency Load Test Table */}
        {activeTab === 'concurrency' && (
          <div className="mt-8 space-y-6">
            <div className="p-6 rounded-2xl bg-[#091122] border border-blue-900/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    WebSocket Concurrency & Event Round-Trip Latency
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Extracted from <code className="text-blue-400">evaluation/load_test.js</code> • 50 simultaneous connected clients
                  </p>
                </div>
                <div className="text-xs font-mono px-3 py-1 bg-emerald-950 text-emerald-300 rounded-lg border border-emerald-800/40">
                  0 Connection Failures / 273 Events Fired
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                      <th className="py-3 px-4">Concurrency Level</th>
                      <th className="py-3 px-4">Connected</th>
                      <th className="py-3 px-4">Room Join Latency</th>
                      <th className="py-3 px-4">AI Event RTT (Mean)</th>
                      <th className="py-3 px-4">RTT (p95)</th>
                      <th className="py-3 px-4 text-right">Failures</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {concurrencyData.map((row) => (
                      <tr key={row.level} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">{row.level}</td>
                        <td className="py-3.5 px-4 text-emerald-400">{row.connected}/{row.attempted}</td>
                        <td className="py-3.5 px-4 text-slate-300">{row.joinMs} ms</td>
                        <td className="py-3.5 px-4 text-blue-300 font-bold">{row.rttMs} ms</td>
                        <td className="py-3.5 px-4 text-slate-400">{row.p95Ms} ms</td>
                        <td className="py-3.5 px-4 text-right text-emerald-400 font-semibold">{row.failures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Total Wall Time for 50-client burst: 360 ms</span>
                <span>Cleanup: All test sessions & alerts purged automatically from MongoDB</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Server Resource Usage */}
        {activeTab === 'resources' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#091122] border border-blue-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Node.js Server Footprint</h3>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                  99 Monitor Samples
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">CPU Mean</div>
                  <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">4.0 %</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Peak burst: 93.2%</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">RSS Memory Mean</div>
                  <div className="text-2xl font-bold font-mono text-blue-400 mt-1">82.2 MB</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Peak allocation: 97.6 MB</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-mono leading-relaxed pt-2">
                Evaluated under continuous WebSocket event streaming on port 5000 with active session state tracking and MongoDB persistence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#091122] border border-blue-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">AI Microservice Inference Latency</h3>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                  FastAPI :8000
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">MiniFASNet PAD</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">39.9 ms</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">p95 latency: 48.1 ms</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-400">SFace 128-D</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mt-1">106.0 ms</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">p95 latency: 174.6 ms</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-mono leading-relaxed pt-2">
                Tested with OpenCV ONNX runtime on 80x80 face crops and 128-D embedding cosine similarity matching.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Academic Limitations & Caveats */}
        {activeTab === 'caveats' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseContent.evaluation.caveatsAndLimitations.map((caveat) => (
              <div
                key={caveat.title}
                className="p-6 rounded-2xl bg-[#091122] border border-amber-900/40 hover:border-amber-700/60 transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Documented Limitation</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {caveat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {caveat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* External Docs Link Banner */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-3">
          <span>Complete test scripts: <code className="text-blue-400">evaluation/run_evaluation.py --all</code></span>
          <a
            href="https://github.com/Nikhi-07/TrueView-Ai-Multimodel_AI-/blob/main/docs/EVALUATION.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Review docs/EVALUATION.md</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
