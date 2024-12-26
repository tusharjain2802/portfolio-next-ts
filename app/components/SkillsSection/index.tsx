import { LinearProgress, Typography, Box } from '@mui/material';

export default function SkillsSection() {
  const skills = [
    { name: 'Web Development (MERN)', level: 80 },
    { name: 'C/C++', level: 80 },
    { name: 'Python', level: 50 },
  ];

  return (
    <section id="skills" style={{ padding: '2rem' }}>
      <h2>Skills</h2>
      {skills.map((skill, idx) => (
        <Box key={idx} mb={2}>
          <Typography variant="body1">{skill.name}</Typography>
          <LinearProgress variant="determinate" value={skill.level} />
        </Box>
      ))}
    </section>
  );
}
