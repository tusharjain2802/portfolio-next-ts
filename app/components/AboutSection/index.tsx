import TextDesign from "@/app/common/textDesign";
import Image from "next/image";
import programmer from "@/app/public/images/programming.png"
import { Typography } from "@mui/material";
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect, useRef } from "react";

export default function AboutSection() {
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
    <section id="about" className="font-ubuntu mx-[9%]" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 className="font-ubuntu text-[42px] font-[600]">About Me</h2>
      <TextDesign>who i am</TextDesign>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-4 items-center justify-between">
        <div>
          <Image className="h-[190px] w-[200px] md:w-auto mx-auto md:h-[299px] lg:h-[383px] " alt="programmer" src={programmer} />
        </div>
        <div className="text-left">
        <Typography className="font-poppins font-[600] text-[16px] md:text-[20px] lg:text-[25px]" variant="h6">
        I&apos;m Tushar and I&apos;m <span className="text-crimson" ref={typewriterRef}></span>
        </Typography>
          <Typography className="font-poppins text-[13px] md:text-[16px] lg:text-[18px]" variant="h6">I&apos;m a Computer Science Engineering. I&apos;m a quick and passionate learner. I am always passionate about understanding the core concepts behind different popular Technological Fields. I think no matter how hard the past is, you can always begin again... and I believe every day is a chance to begin again. I love whatever I do...and also I do whatever I love...
          </Typography>
        </div>
      </div>
    </section>
  );
}
