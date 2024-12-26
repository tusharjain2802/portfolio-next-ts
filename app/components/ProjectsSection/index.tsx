export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg">
                        <img
                            src="/images/project1.jpg"
                            alt="Project 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">Project Name</h3>
                            <p className="text-gray-700 mb-4">
                                Brief description of the project and its purpose.
                            </p>
                            <a
                                href="#"
                                className="text-red-500 font-medium hover:underline"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                    {/* Add more project cards similarly */}
                </div>
            </div>
        </section>
    );
}
