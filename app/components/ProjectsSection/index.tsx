import TextDesign from "@/app/common/textDesign";
import Link from "next/link";

export default function ProjectsSection() {
    interface Project {
        role: string;
        technologies: string;
        description: React.ReactNode;
        link: string;
    }

    const projects: Project[] = [
        {
            role: 'BlockseBlock',
            technologies: 'React.js, Tailwind, Redux, MongoDB, Node.js',
            description: <ul style={{ listStyle: "disc" }}>
                <li>  Integrated Notifications System: Developed a real-time notifications feature using web sockets, ensuring users receive
                    immediate updates on important events.</li>
                <li>API Request Limiting: Implemented express-rate-limiter to control API request rates per user through IP addresses, enhancing
                    security and performance.</li>
                <li>Responsive Web Design: Built a fully responsive web application with Tailwind CSS, ensuring seamless usability across various
                    devices and screen sizes.</li>
                <li>Advanced Security Measures: Utilized auto-expiring JWT tokens for secure session management and integrated Google
                    Captcha to prevent automated attacks.</li>
                <li>Data Management and Automation: Leveraged Redux and redux-persist for localStorage data management, incorporated xlsx
                    for data export functionality, and implemented automated email notifications for user engagement using nodemailer</li>
            </ul>,
            link: "https://blockseblock.com/"
        },
        {
            role: 'Sipnplay',
            technologies: 'React.js, Tailwind, Rust, ICP Blockchain',
            description: <ul style={{ listStyle: "disc" }}>
                <li><b>Web3 Gaming Platform:</b> Developed SipnPlay.io, a casual Web3 gaming arcade enabling users to buy custom tokens, play hyper-casual games, and earn rewards, bridging Web2 and Web3 ecosystems.</li>
                <li>Implemented token-based gaming mechanics, fostering user retention through rewards, community building, and simplified onboarding for Web2 users. Built a responsive, user-friendly platform using React and Tailwind CSS, optimizing for performance across devices and ensuring scalability.</li>
                <li><b>Blockchain Integration:</b> Leveraged ICP Blockchain and Rust for secure, decentralized backend operations, ensuring seamless token transactions and game interactions.
                </li></ul>,
            link: "https://sipnplay.io/"
        },
        {
            role: 'Dinify',
            technologies: 'Node.js, BootStrap, EJS, MongoDB',
            description: <ul style={{ listStyle: "disc" }}>
                <li>Implemented a dual-user system, configured for one mess incharge and multiple student profiles. Implemented sentiment analysis using NLP to classify feedbacks, and feedback processing efficiency.</li>
                <li>It allows users to provide feedback, access monthly menus, submit issues, and view real-time person count.</li>
                <li>Designed and integrated the Smart-Food-Monitor, a hardware component, to monitor environmental conditions (temperature,
                    humidity, light exposure, and odor presence). System aimed to analyze and optimize environmental conditions to prevent food
                    degradation and ensure food safety and quality standards were met.
                </li></ul>,
            link: "https://github.com/tusharjain2802/DINIFY-Mess-Management-System"
        },
    ];

    return (
        <section className="bg-white px-[9%] text-black" id="projects">
            <h2 className="font-ubuntu text-[30px] md:text-[42px] pt-12 text-center font-[600]">My Projects</h2>
            <TextDesign>what i made</TextDesign>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 pb-20 gap-12">
                {projects.map((project, idx) => (
                    <Link key={idx} target="_blank" href={project.link}>
                        <div className="bg-[#e7e7e7] rounded-xl hover:bg-crimson transition-colors duration-500 ease-in-out p-7 gap-6 text-center" style={{ marginBottom: '1rem' }}>
                            <h3 className="font-bold text-[21px] md:text-[25px]">{project.role}</h3>
                            <p className="text-[15px] md:text-[19px] font-medium mt-4">({project.technologies})</p>
                            <div className="text-[11px] md:text-[14px] mt-6">{project.description}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
