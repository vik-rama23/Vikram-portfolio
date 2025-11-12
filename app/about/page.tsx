import MotionWrapper from "@/components/MotionWrapper";

export default function About() {
  return (
    <MotionWrapper>
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Me</h2>
      <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-100">
        I’m a results-driven software engineer with more than 9 years of experience
        specializing in frontend development. I focus on building responsive,
        scalable, and visually appealing web applications using React.js,
        Next.js, Redux, and TypeScript.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-100">
        Throughout my career, I’ve worked with global enterprises like Larsen &
        Toubro Infotech, Tech Mahindra, Infosys, and Senvion. My work involves
        designing and developing complex UI systems, optimizing performance, and
        leading teams to deliver modern web solutions.
      </p>
      <p className="text-gray-700 leading-relaxed dark:text-gray-100">
        My interests include IoT, Python, SQL, Azure DevOps, and exploring
        advanced data visualization with Highcharts and Power BI.
      </p>
    </section>
    </MotionWrapper>
  );
}
