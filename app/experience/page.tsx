import MotionWrapper from "@/components/MotionWrapper";

export default function Experience() {
    const experiences = [
        {
            company: "Larsen & Toubro Infotech",
            role: "Senior Software Developer",
            duration: "Nov 2021 – Present",
            details: [
                "Leading a team of frontend developers to deliver data-driven applications.",
                "Developed complex charts using Highcharts and TypeScript.",
                "Implemented Jest & RTL unit tests with 85% code coverage.",
                "Delivered optimized, scalable, and responsive web solutions.",
            ],
        },
        {
            company: "Tech Mahindra",
            role: "Senior Software Developer",
            duration: "May 2021 – Oct 2021",
            details: [
                "Developed reusable UI components and NPM packages.",
                "Guided team members on React, Redux, and SASS best practices.",
            ],
        },
        {
            company: "Infosys Ltd.",
            role: "Associate Consultant",
            duration: "Dec 2018 – Apr 2021",
            details: [
                "Developed UIs for Toyota and Raymond using React, Redux, and Kendo UI.",
                "Collaborated with PO and dev teams to align frontend deliverables.",
            ],
        },
        {
            company: "Senvion India Pvt Ltd.",
            role: "Frontend Engineer - Analytics",
            duration: "Jun 2018 – Dec 2018",
            details: [
                "Built offline-capable apps using React Native and Redux.",
                "Improved performance and optimized data handling.",
            ],
        },
        {
            company: "Divum Corporate Services Pvt Ltd.",
            role: "Frontend Developer",
            duration: "Sep 2016 – May 2018",
            details: [
                "Developed mobile apps using Angular, Ionic, and Cordova.",
                "Implemented geolocation, encryption, and push notifications.",
            ],
        },
    ];

    return (
        <MotionWrapper>
            <section className="py-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.company} className="border-l-4 border-blue-600 pl-4">
                            <h3 className="text-xl font-semibold text-blue-600">{exp.role}</h3>
                            <p className="text-gray-800">
                                {exp.company} | {exp.duration}
                            </p>
                            <ul className="list-disc ml-5 text-gray-700 mt-2">
                                {exp.details.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </MotionWrapper>
    );
}
