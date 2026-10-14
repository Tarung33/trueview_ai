import React, { useState } from 'react';
import ShowcaseNav from '../components/Showcase/ShowcaseNav';
import HeroSection from '../components/Showcase/HeroSection';
import ProjectOverviewSection from '../components/Showcase/ProjectOverviewSection';
import SystemWorkflowSection from '../components/Showcase/SystemWorkflowSection';
import TechnologySection from '../components/Showcase/TechnologySection';
import EvaluationSection from '../components/Showcase/EvaluationSection';
import GallerySection from '../components/Showcase/GallerySection';
import VideoDemoSection from '../components/Showcase/VideoDemoSection';
import OpenSourceSection from '../components/Showcase/OpenSourceSection';
import TeamSection from '../components/Showcase/TeamSection';
import EthicsSection from '../components/Showcase/EthicsSection';
import ShowcaseFooter from '../components/Showcase/ShowcaseFooter';
import ImageLightboxModal from '../components/Showcase/ImageLightboxModal';
import { showcaseContent } from '../data/showcaseContent';

export default function ShowcasePage() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    index: 0,
    list: showcaseContent.gallery,
  });

  const handleOpenLightbox = (src, title, caption, index = 0, list = showcaseContent.gallery) => {
    setLightboxState({
      isOpen: true,
      item: { src, title, caption },
      index,
      list,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNext = () => {
    const nextIdx = (lightboxState.index + 1) % lightboxState.list.length;
    const nextItem = lightboxState.list[nextIdx];
    setLightboxState((prev) => ({
      ...prev,
      index: nextIdx,
      item: nextItem,
    }));
  };

  const handlePrev = () => {
    const prevIdx = (lightboxState.index - 1 + lightboxState.list.length) % lightboxState.list.length;
    const prevItem = lightboxState.list[prevIdx];
    setLightboxState((prev) => ({
      ...prev,
      index: prevIdx,
      item: prevItem,
    }));
  };

  return (
    <div className="min-h-screen bg-[#060b16] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Editorial Navigation */}
      <ShowcaseNav />

      {/* 1. Distinctive Hero Section */}
      <HeroSection onOpenLightbox={handleOpenLightbox} />

      {/* 2. Project Overview & Challenges */}
      <ProjectOverviewSection />

      {/* 3. System Workflow & Decoupled Architecture */}
      <SystemWorkflowSection />

      {/* 4. Technologies & Architecture Layers */}
      <TechnologySection />

      {/* 5. Empirical Results & Verified Evaluation */}
      <EvaluationSection />

      {/* 6. Real Project Screenshot Gallery (20 Authentic Captures) */}
      <GallerySection onOpenLightbox={handleOpenLightbox} />

      {/* 7. Prepared Demonstration Video Container */}
      <VideoDemoSection onOpenLightbox={handleOpenLightbox} />

      {/* 8. Open Source Codebase & Technical Documentation */}
      <OpenSourceSection />

      {/* 9. Team & Project Guide */}
      <TeamSection />

      {/* 10. Responsible Use & Academic Ethics */}
      <EthicsSection />

      {/* Editorial Footer */}
      <ShowcaseFooter />

      {/* Fullscreen Screenshot Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        currentItem={lightboxState.item}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={lightboxState.list && lightboxState.list.length > 1}
        hasPrev={lightboxState.list && lightboxState.list.length > 1}
      />
    </div>
  );
}
