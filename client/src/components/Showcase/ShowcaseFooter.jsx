import React from 'react';
import { Shield, ArrowUp, ExternalLink } from 'lucide-react';
import Github from './GithubIcon';
import { showcaseContent } from '../../data/showcaseContent';

export default function ShowcaseFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040812] text-white border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Academic Affiliation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                {showcaseContent.hero.wordmark}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An academic research implementation exploring server-authoritative multimodal sensor fusion for secure remote assessments.
            </p>

            <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
              <div>{showcaseContent.meta.department}</div>
              <div>{showcaseContent.meta.institution}</div>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Sections
            </div>
            <ul className="text-xs space-y-2 text-slate-400 font-medium">
              <li><a href="#overview" className="hover:text-white transition-colors">Project Overview</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">System Workflow</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Decoupled Architecture</a></li>
              <li><a href="#evaluation" className="hover:text-white transition-colors">Empirical Evaluation</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Real Screenshot Gallery</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team & Project Guide</a></li>
            </ul>
          </div>

          {/* External Links & Back to Top */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Repository & Platform
            </div>

            <div className="space-y-2">
              <a
                href={showcaseContent.meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>Nikhi-07 / TrueView-Ai</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="/login"
                className="flex items-center justify-between p-3 rounded-lg bg-blue-950/40 border border-blue-900/40 text-xs text-blue-300 hover:text-white hover:bg-blue-900/60 transition-colors"
              >
                <span>Launch Proctoring System</span>
                <span>→</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top of page</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-3">
          <div>
            © 2026 TrueView AI Project Team. Open source under MIT & Apache-2.0.
          </div>
          <div>
            Preserving Academic Integrity Through Transparent Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
