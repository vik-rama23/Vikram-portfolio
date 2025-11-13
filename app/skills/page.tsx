import PageWrapper from "@/components/MotionWrapper";

export default function Skills() {
  const skills = [
    "React", "Next.js", "TypeScript", "Redux", "React Native", "HTML5",
    "CSS3", "SASS", "Tailwind", "Highcharts", "Jest", "RTL",
  ];

  return (
    <PageWrapper>
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s} className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between">
              <span className="text-gray-800 dark:text-gray-100">{s}</span>
              <div className="h-2 w-24 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
