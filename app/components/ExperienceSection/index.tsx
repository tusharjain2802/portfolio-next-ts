import TextDesign from "@/app/common/textDesign";

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'QuadB technologies',
      date: 'SDE - Full Time | 27/01/2024 - 04/01/2025',
      description: <ul style={{listStyle:"disc"}}>
        <li>Developed a web application to launch and participate in hackathons globally (blockseblock.com), catering to over 10,000 users worldwide.
          Implemented a dual-user system, configured for multiple organizers and customer profiles.</li>
        <li>Used technologies including React, Tailwind CSS, and Redux for robust state management, ensuring seamless user experience
          and optimal performance.</li>
        <li>Built SipnPlay.io, a casual Web3 gaming arcade integrating React, Tailwind CSS, and ICP Blockchain with Rust for backend operations. Users could buy custom tokens, play games, and earn rewards, bridging the gap between Web2 and Web3 users.
          </li></ul>
    },
    {
      role: 'Lumega Labs ',
      date: 'SDE - Full Time | 01/01/2025 - Present',
      description:  <ul style={{listStyle:"disc"}}>
      <li>Developed a web application to launch and participate in hackathons globally (blockseblock.com), catering to over 10,000 users worldwide.
        Implemented a dual-user system, configured for multiple organizers and customer profiles.</li>
      <li>Used technologies including React, Tailwind CSS, and Redux for robust state management, ensuring seamless user experience
        and optimal performance.</li>
      <li>Built SipnPlay.io, a casual Web3 gaming arcade integrating React, Tailwind CSS, and ICP Blockchain with Rust for backend operations. Users could buy custom tokens, play games, and earn rewards, bridging the gap between Web2 and Web3 users.
        </li></ul>,
    },
  ];

  return (
    <section className="bg-black px-[9%] text-white" id="experience">
      <h2 className="font-ubuntu text-[30px] md:text-[42px] pt-12 text-center font-[600]">Experience</h2>
      <TextDesign theme="dark">what i got</TextDesign>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 pb-20 gap-12">
      {experiences.map((exp, idx) => (
        <div className="bg-[#222] items-center rounded-xl hover:bg-crimson transition-colors duration-500 ease-in-out p-7 gap-6 text-center" key={idx} style={{ marginBottom: '1rem' }}>
          <h3 className="font-bold text-[21px] md:text-[25px]">{exp.role}</h3>
          <p className="text-[15px] md:text-[19px] font-semibold mt-4">{exp.date}</p>
          <div className="text-[11px] md:text-[14px] mt-6">{exp.description}</div>
        </div>
      ))}
      </div>
    </section>
  );
}
