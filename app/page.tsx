'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HomeSection from '@/app/components/HomeSection';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import ContactSection from '@/app/components/ContactSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    Aos.init();
}, [])

  return (
    <div className='font-poppins'>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
