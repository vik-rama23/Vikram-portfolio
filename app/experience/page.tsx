import PageWrapper from "@/components/MotionWrapper";

export default function Experience() {
    const experiences = [
        {
            company: "LTIMindtree (formerly Larsen & Toubro Infotech)",
            role: "Senior Software Developer / Team Lead",
            duration: "Nov 2021 – Present",
            bullets: [
                "Leading the LTIMindtree team for EY Competitive Edge, a strategic intelligence & analytics platform.",
                "Planning UI tasks, assigning work, and mentoring junior developers.",
                "Built interactive dashboards using React, TypeScript, Redux and Highcharts.",
                "Improved UI performance, accessibility and component architecture.",
                "Created reusable UI components shared across modules.",
                "Implemented unit tests using Jest & React Testing Library.",
                "Collaborated with backend and UX teams for seamless delivery."
            ],
        },
        {
            company: "Tech Mahindra",
            role: "Senior Software Developer (BNSF Railway)",
            duration: "May 2021 – Oct 2021",
            bullets: [
                "Developed reusable NPM packages for BNSF Railway’s frontend team.",
                "Built shared UI components and utilities used across multiple applications.",
                "Handled bug fixes, enhancements and provided demos to FE developers.",
                "Maintained 80%+ test coverage with Jest and React Testing Library.",
                "Conducted KT sessions and created usage documentation."
            ],
        },
        {
            company: "Infosys",
            role: "Software Associate consultant / Frontend Lead (Toyota North America)",
            duration: "Dec 2018 – Apr 2021",
            bullets: [
                "Worked as the Frontend Lead for Toyota’s Forklift Telematics platform.",
                "Coordinated UI efforts between offshore and onsite teams.",
                "Visualized telematics data from SAP and multiple databases (Historical, Cosmos, App DB).",
                "Built dashboards using React and Power BI including line, bar, donut and mixed charts.",
                "Guided junior developers through KT sessions, code reviews and architecture decisions.",
                "Improved UI stability, real-time data handling and overall performance."
            ],
        },
        {
            company: "Senvion India Pvt. Ltd.",
            role: "Frontend Engineer",
            duration: "June 2018 – Dec 2018",
            bullets: [
                "Built dashboards for real-time wind turbine monitoring.",
                "Developed analytical UI screens using Angular and JavaScript.",
                "Worked with sensor and performance data visualization."
            ],
        },
        {
            company: "Divum Corporate Services Pvt. Ltd.",
            role: "Application Developer",
            duration: "Sept 2016 – May 2018",
            bullets: [
                "Developed Aditya Birla Travel & Locator App using Angular/Ionic with maps, encryption and notifications.",
                "Built LimeRoad e-commerce UI for Jio feature phones using React and Redux.",
                "Created Zopper e-commerce mobile app for Samsung Tizen devices.",
                "Developed responsive frontend for NASSCOM’s nipp.tech innovation platform."
            ],
        },
    ];

    const awards = [
        {
            title: "Spot Award – LTIMindtree",
            desc: "Awarded for delivering high-quality UI enhancements under tight timelines."
        },
        {
            title: "Super crew award – LTIMindtree",
            desc: "Awarded twice for outstanding UI delivery, quality improvements, and consistently meeting challenging deadlines."
        },
        {
            title: "Client Appreciation – LTIMindtree",
            desc: "Recognized for consistent productivity, ownership and seamless delivery."
        },
        {
            title: "Insta award – Infosys",
            desc: "Recognized twice for leading the FE team and improving Toyota telematics dashboards."
        }
    ];

    return (
        <PageWrapper>
            <section className="py-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Experience</h2>

                <div className="space-y-6">
                    {experiences.map((e) => (
                        <div key={e.company} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{e.role}</h3>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                        {e.company} • {e.duration}
                                    </div>
                                </div>
                            </div>

                            <ul className="mt-3 list-disc ml-5 text-gray-700 dark:text-gray-300">
                                {e.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Awards Section */}
                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 dark:text-gray-100">Awards & Recognition</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {awards.map((a) => (
                        <div key={a.title} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{a.title}</h3>
                            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
}
