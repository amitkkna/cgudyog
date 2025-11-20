'use client';

import { useState, useEffect } from 'react';
import NewsStrip from '@/components/NewsStrip';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import LatestNewsSection from '@/components/home/LatestNewsSection';
import FeaturedDirectorySection from '@/components/home/FeaturedDirectorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactPreviewSection from '@/components/home/ContactPreviewSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Top spacing for fixed navbar */}
      <div className="h-20" />

      {/* News Strip - positioned below navbar */}
      <div className="relative z-40">
        <NewsStrip
          position="inline"
          variant="scrolling"
          autoPlay={true}
          speed={35}
          pauseOnHover={true}
          showControls={false}
          showClose={true}
          maxItems={6}
          language="en"
        />
      </div>

      <HeroSection />
      <StatsSection />
      <LatestNewsSection />
      <FeaturedDirectorySection />
      <TestimonialsSection />
      <ContactPreviewSection />
    </div>
  );
}
