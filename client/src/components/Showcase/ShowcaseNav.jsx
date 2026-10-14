import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Menu, X, ExternalLink, Activity, Layers, FileText, Users, Image as ImageIcon, BarChart3 } from 'lucide-react';
import Github from './GithubIcon';
import { showcaseContent } from '../../data/showcaseContent';

export default function ShowcaseNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview', icon: Activity },
    { label: 'Workflow', href: '#workflow', icon: Layers },
    { label: 'Architecture', href: '#architecture', icon: Layers },
    { label: 'Evaluation', href: '#evaluation', icon: BarChart3 },
    { label: 'Gallery', href: '#gallery', icon: ImageIcon },
    { label: 'Open Source', href: '#resources', icon: FileText },
    { label: 'Team', href: '#team', icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060b16]/95 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/30 py-3'
          : 'bg-[#060b16]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Academic Badge */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-blue-500/20 border border-blue-400/30 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {showcaseContent.hero.wordmark}
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/30 font-semibold tracking-wider">
                  Academic
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-medium tracking-tight">
                Context-Aware Multimodal Proctoring
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-150 tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={showcaseContent.hero.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-all duration-150 shadow-sm"
              title="View on GitHub"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-blue-950 text-blue-400 rounded border border-blue-800/40">★ 07</span>
            </a>

            <a
              href={showcaseContent.hero.ctaApp.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/25 border border-blue-400/30 transition-all duration-150 hover:scale-[1.02]"
            >
              <span>Launch App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={showcaseContent.hero.ctaApp.href}
              className="px-2.5 py-1 text-xs font-semibold text-white bg-blue-600 rounded-md"
            >
              App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-slate-800/80 bg-[#060b16]/98 rounded-b-xl px-2 pb-4 space-y-1 shadow-2xl animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-950/40 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={showcaseContent.hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
              >
                <Github className="w-4 h-4" />
                <span>Explore Source Code on GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={showcaseContent.hero.ctaApp.href}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow"
              >
                <span>Launch Proctoring System</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
