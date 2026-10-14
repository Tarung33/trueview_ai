import React, { useState } from 'react';
import { ExternalLink, Copy, Check, FileText, BookOpen, ShieldCheck, Terminal, ArrowUpRight, FolderGit2 } from 'lucide-react';
import Github from './GithubIcon';
import { showcaseContent } from '../../data/showcaseContent';

export default function OpenSourceSection() {
  const [copied, setCopied] = useState(false);

  const cloneCommand = showcaseContent.openSource.cloneCmd;
  const repoUrl = showcaseContent.openSource.repoUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const docs = showcaseContent.openSource.resources;

  return (
    <section id="resources" className="py-24 sm:py-32 bg-[#060b16] text-white border-t border-slate-800 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main GitHub Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1630] to-[#080f22] border border-blue-900/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-blue-300 text-xs font-mono font-semibold tracking-wider uppercase">
                <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Open Source Academic Repository</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Inspect the Codebase. Audit the Neural Pipelines.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                TrueView AI is fully open for peer review, academic evaluation, and reproducibility. The entire 3-tier codebase — React client, Node.js WebSocket engine, and FastAPI microservices — is hosted publicly on GitHub.
              </p>

              {/* Terminal Clone Command Bar */}
              <div className="pt-2 max-w-xl">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 overflow-x-auto truncate">
                    <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-400 select-all">{cloneCommand}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 ml-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
                    title="Copy command"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Action CTA */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-150 hover:scale-[1.02]"
              >
                <Github className="w-5 h-5" />
                <span>Explore Source Code on GitHub</span>
                <ExternalLink className="w-4 h-4 text-blue-200" />
              </a>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>License:</span>
                  <span className="text-slate-200">MIT & Apache-2.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Branch:</span>
                  <span className="text-blue-400">main</span>
                </div>
                <div className="flex justify-between">
                  <span>Dependencies:</span>
                  <span className="text-slate-200">Node 18+ • Python 3.10+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Documentation Index Grid */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Technical Documentation & Academic Publications
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
              Direct links to architectural whitepapers, empirical evaluation notes, and academic dissertation resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {docs.map((doc) => {
              const hasExternalLink = doc.available && doc.docPath !== '#';
              const targetUrl = hasExternalLink
                ? `${repoUrl}/blob/main/${doc.docPath}`
                : undefined;

              return (
                <div
                  key={doc.title}
                  className="p-5 rounded-xl bg-[#091122] border border-blue-900/30 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        doc.available
                          ? 'bg-blue-950 text-blue-300 border-blue-800/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}>
                        {doc.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight mb-2">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    {hasExternalLink ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>View file on GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        Available upon request / graduation submission
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
