export default function ExperienceSection() {
    const experiences = [
      {
        role: 'Oasis Infobyte - Internship',
        description: '1 month internship in Web Development and Designing.',
        date: '24/7/2022',
      },
      {
        role: 'LetsGrowMore - Internship',
        description: 'Participant in the Virtual Internship Program in Data Science.',
        date: '5/11/2021',
      },
    ];
  
    return (
      <section id="experience" style={{ padding: '2rem' }}>
        <h2>Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <h3>{exp.role}</h3>
            <p>{exp.description}</p>
            <small>{exp.date}</small>
          </div>
        ))}
      </section>
    );
  }
  