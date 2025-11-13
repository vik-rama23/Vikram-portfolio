import PageWrapper from "@/components/MotionWrapper";
import { Mail, Linkedin, Github, MapPin, GraduationCap, Phone } from "lucide-react";

export default function About() {
    return (
        <PageWrapper>
            <section className="py-12 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    About Me
                </h2>

                {/* ABOUT PARAGRAPHS */}
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-10">
                    <p>
                        I’m a Frontend Engineer with over 9+ years of experience building responsive web applications.
                        I specialize in React, Next.js, and TypeScript, and I enjoy creating clean, user-friendly interfaces.
                        I focus on performance, accessibility, and writing code that is easy to understand and maintain.
                    </p>

                    <p>
                        I have worked at LTIMindtree, Tech Mahindra, Infosys, Senvion, and Divum —
                        building dashboards, component libraries, telematics visualizations, and scalable UI systems.
                        I also lead frontend teams, conduct KT sessions, and help junior developers grow in their careers.
                    </p>

                    <a
                        href="/Vikramkumar-resume.pdf"
                        download
                        className="inline-block bg-blue-600 text-white mt-4 px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Download Resume
                    </a>
                </div>

                {/* TIMELINE */}
                <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-10">

                    {/* LOCATION */}
                    <div className="relative">
                        <span className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full shadow-md"></span>

                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <MapPin size={18} /> Location
                        </h3>

                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Pune, Maharashtra, India
                        </p>
                    </div>

                    {/* EDUCATION */}
                    <div className="relative">
                        <span className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full shadow-md"></span>

                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <GraduationCap size={18} /> Education
                        </h3>

                        <div className="mt-2 space-y-4 text-gray-700 dark:text-gray-300">

                            <div className="mt-2">
                                <div className="font-semibold text-gray-800 dark:text-gray-100">
                                    Diploma, Electronics & Tele-Communication
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Maharastra State Board of Technical Education, Pune
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">2008 – 2011</div>
                            </div>

                            <div className="mt-2">
                                <div className="font-semibold text-gray-800 dark:text-gray-100">
                                    B.E, Electronics & Communication.
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV, Bhopal)
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">2011 – 2014</div>
                            </div>

                            <div className="mt-3">
                                <div className="font-semibold text-gray-800 dark:text-gray-100">
                                    PG Diploma – Embedded system design (CDAC)
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">2015 – 2016</div>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className="relative">
                        <span className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full shadow-md"></span>

                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            Contact
                        </h3>

                        <div className="mt-2 space-y-3 text-gray-700 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <Phone size={18} />
                                <a
                                    href="tel:8962453292"
                                    className="hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    +91-8962453292
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={18} />
                                <a
                                    href="mailto:vik.rama@yahoo.com"
                                    className="hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    vik.rama@yahoo.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Linkedin size={18} />
                                <a
                                    href="https://www.linkedin.com/in/vikramkumarverma/"
                                    target="_blank"
                                    className="hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    linkedin.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Github size={18} />
                                <a
                                    href="https://github.com/vik-rama23"
                                    target="_blank"
                                    className="hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    github.com
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </PageWrapper>
    );
}

