import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Competitive Edge (EY-CT)",
      description:
        "A data-driven web application developed for EY to visualize business analytics. Built with React, TypeScript, and Highcharts for real-time analytics.",
      tech: ["React", "TypeScript", "Redux", "Highcharts", "HTML5", "SASS"],
      image: "/projects/ey-ct.png",
      duration: "4 years",
      github: "",
      live: "",
    },
    {
      title: "BNSF NPM Packages",
      description:
        "Developed reusable UI components as internal NPM packages, ensuring design consistency across multiple enterprise web applications.",
      tech: ["React", "SASS", "NPM", "Redux"],
      image: "/projects/npm-package.png",
      duration: "0.5 years",
      github: "",
      live: "",
    },
    {
      title: "Toyota GTS Web App",
      description:
        "Enterprise-grade web application for Toyota Material Handling, developed using React, Redux, and Kendo UI. Improved UI consistency and responsiveness.",
      tech: ["React", "Redux", "Kendo UI", "SASS"],
      image: "/projects/toyota-gts.png",
      duration: "2.5 years",
      github: "",
      live: "",
    },
    {
      title: "Senvion India Pvt. Ltd. (Analytics)",
      description:
        "Developed analytics dashboards for wind turbine performance visualization using React, React Native, and Highcharts.",
      tech: ["React", "React Native", "Redux Persist", "Highcharts"],
      image: "/projects/senvion.png",
      duration: "0.5 years",
      github: "",
      live: "",
    },
    {
      title: "Aditya Birla Travel & Locator App",
      description:
        "Built a hybrid mobile app using Angular and Ionic for travel tracking and push notifications with AWS integration.",
      tech: ["Angular", "Ionic", "Cordova", "AWS"],
      image: "/projects/aditya-birla.png",
      duration: "1.8 years",
      github: "",
      live: "",
    },
  ];

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Projects
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
        Below are key projects I’ve built or contributed to over the past 9 years,
        demonstrating my experience with modern frontend frameworks, enterprise apps,
        and reusable UI component design.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
