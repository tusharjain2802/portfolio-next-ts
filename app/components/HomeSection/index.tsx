import bgImage from "@/app/public/images/banner.jpg";
import { Button } from '@mui/material';
import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';

export default function HomeSection() {
  const typewriterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
      });

      typewriter
      .typeString('Full-Stack Developer.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Freelancer')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Software Engineer')
        .pauseFor(1500)
        .deleteAll()
        .start();
    }
  }, []);
  return (
    <section id="home" className="text-white font-poppins" style={{
      backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="py-[187px] md:py-[230px] mx-[9%] font-bold">  
        <h1 className="text-[19px] font-[500] md:text-[28px]">Hello, my name is</h1>
        <p className="text-[36px] md:text-[82px]"> Tushar Jain</p>
        <p className="text-[19px] font-[500] md:text-[28px]">And I'm a <span ref={typewriterRef}></span></p>
        <Button target="_blank" className="bg-[#DC143C] mt-[40px]" size="large" aria-label="linkedIn Profile" variant="contained" href="https://www.linkedin.com/in/tushar-jain-94a6a2194/">LinkedIn Profile</Button>
      </div>
    </section>
  );
}
