import { LinearProgress, Typography, Box } from '@mui/material';
import TextDesign from "@/app/common/textDesign";

export default function SkillsSection() {
  const skills = [
    { name: 'Web Development (MERN)', level: 95 },
    { name: 'C/C++ (DSA, OOPs, Classes Objects) ', level: 90 },
    { name: 'SQL', level: 80 },
  ];

  return (
    <section className='!bg-black !px-[9%] text-white' id="skills" >
      <h2 className="font-ubuntu !text-center !text-[30px] md:!text-[42px] !pt-[2rem] !font-[600]">My Skills</h2>
      <TextDesign theme='dark'>what i know</TextDesign>
      <div className='!grid !grid-cols-1 !font-poppins md:!grid-cols-2 md:!gap-20 !mt-10 md:!mt-16 !pb-12'>
        <div data-aos="fade-right">
          <Typography className='!font-bold' variant="h6">My creative skills & experiences.</Typography>
          <Typography className='!mt-4' variant="body1">As an experienced professional, I understand the immense value that technical skills bring to the field of engineering. These skills not only foster a sense of accomplishment but also fuel my passion for technology. Over the years, I have gained substantial hands-on experience and expertise in areas such as Data Science, Team Leadership, Management, and programming languages like C, C++, MERN stack developemnt, SQL, ICP Blockchain and more. My journey started with a strong foundation built during my B.Tech, and through continuous learning and real-world applications, I have honed my abilities. I am a quick and passionate learner, always eager to embrace new challenges and contribute effectively to any team or project.</Typography>
        </div>
        <div data-aos="fade-left">
          {skills.map((skill, idx) => (
            <Box className="!mt-12 md:!mt-0" key={idx} mb={2}>
              <div className='!flex md:!mt-4 !justify-between'>
              <Typography className='!font-bold !font-poppins' variant="body1">{skill.name}</Typography>
              <Typography className='!font-bold !font-poppins' variant="body1">{skill.level} %</Typography>
              </div>
              <LinearProgress className='!mt-3 !text-crimson !bg-white' color='inherit' variant="determinate" value={skill.level} />
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
}
