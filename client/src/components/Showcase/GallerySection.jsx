import React, { useState } from 'react';
import { Eye, ExternalLink, Maximize2, Tag, Filter } from 'lucide-react';
import { showcaseContent } from '../../data/showcaseContent';

export default function GallerySection({ onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Biometrics',
    'Perception',
    'Violations',
    'Proctoring',
    'Reports',
  ];

  const galleryItems = showcaseContent.gallery;

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              Real System Visual Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              Project Application Gallery
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              20 authentic, unedited screenshots captured during active test sessions of the TrueView AI client, AI perception viewers, proctor room manager, and forensic reports engine.
            </p>
          </div>

          <div className="shrink-0 text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            Showing {filteredItems.length} of {galleryItems.length} Real Project Captures
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image with Click to Zoom */}
              <div
                className="relative bg-slate-950 aspect-[16/10] overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox(item.src, item.title, item.caption, idx, filteredItems)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                
                {/* Subtle Hover Overlay with Enlarge Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-mono flex items-center gap-1.5 border border-white/20 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-mono font-semibold text-white border border-white/10 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Route Pill */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded bg-blue-950/80 backdrop-blur-sm text-[10px] font-mono text-blue-300 border border-blue-500/30">
                    {item.route}
                  </span>
                </div>
              </div>

              {/* Card Body & Technical Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
