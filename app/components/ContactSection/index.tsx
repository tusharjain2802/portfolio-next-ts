export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center mb-12">Get in Touch</h2>
                <form className="space-y-6 max-w-3xl mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg"
                            />
                        </div>
                    </div>
                    <textarea
                        placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg"
                        rows={5}
                    ></textarea>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-red-500 text-white font-medium rounded-md transition hover:bg-transparent hover:border hover:border-red-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
