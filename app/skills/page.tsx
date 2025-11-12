import MotionWrapper from "@/components/MotionWrapper";

export default function Skills() {
    const skills = {
        "Web Technologies": [
            "React.js",
            "Next.js",
            "React Native",
            "Angular",
            "HTML5",
            "CSS3",
            "SASS",
            "Bootstrap",
            "Node.js",
            "Jest",
            "RTL",
            "Highcharts",
        ],
        "Tools & IDEs": [
            "VS Code",
            "GitLab",
            "JIRA",
            "Eclipse",
            "Android Studio",
            "Xcode",
        ],
        "Areas of Interest": ["IoT", "Python", "SQL", "Azure DevOps", "Power BI"],
    };

    return (
        <MotionWrapper>
            <section className="py-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    Skills & Competencies
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="border rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                {category}
                            </h3>
                            <ul className="list-disc ml-5 text-gray-700">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </MotionWrapper>
    );
}
