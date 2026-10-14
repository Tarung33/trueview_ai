import React from 'react';
import { Users, GraduationCap, Mail, Building2, BookOpen, Award } from 'lucide-react';
import Github from './GithubIcon';
import { showcaseContent } from '../../data/showcaseContent';

export default function TeamSection() {
  const team = showcaseContent.team;

  return (
    <section id="team" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            {team.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
            {team.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {team.subtitle}
          </p>
        </div>

        {/* Institution & Department Academic Header */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{team.department}</h3>
              <p className="text-xs text-slate-500 font-mono">{team.institution}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Bachelor of Engineering (B.E) </span>
          </div>
        </div>

        {/* 4 Team Members Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Clean Typography-led Initials Avatar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold text-base flex items-center justify-center shadow-sm">
                    {member.initials}
                  </div>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-950 tracking-tight">
                  {member.name}
                </h3>
                <div className="text-xs font-mono font-semibold text-blue-700 mt-0.5 mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.contribution}
                </p>
              </div>

              {/* Email contact */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{member.email}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Guide & Academic Mentorship Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Project Guidance & Faculty Supervision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {team.guide.name}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-slate-300">
                {team.guide.designation} • {team.guide.department}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {team.guide.message}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 space-y-2">
              <div className="text-slate-400 uppercase tracking-wider text-[10px]">Academic Supervision:</div>
              <div>• Biometric presentation-attack compliance</div>
              <div>• Server-authoritative zero-trust validation</div>
              <div>• Ethical human-in-the-loop review criteria</div>
              <div>• Capstone dissertation defense evaluation</div>
            </div>
          </div>
        </div>

        {/* Configuration Notice */}
        <div className="mt-6 text-center text-[11px] font-mono text-slate-400">
          To update team member names, academic titles, or guide details, modify <code className="text-slate-600">client/src/data/showcaseContent.js</code>
        </div>
      </div>
    </section>
  );
}
