import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Competitive Edge (EY)",
      description:
        "A data-driven strategic intelligence and M&A analytics platform. Helps enterprises analyze markets, competitors, and trends using AI-powered insights and interactive dashboards. Built high-performance charts, improved rendering, and created reusable UI components.",
      tech: ["React", "TypeScript", "Redux", "Highcharts", "Jest", "RTL"],
      image: "/projects/ey-ct.png",
      duration: "",
      github: "",
      live: "",
    },
    {
      title: "BNSF NPM Packages",
      description: "Developed and maintained reusable NPM packages for the BNSF Railway frontend team. Built UI components, fixed bugs, delivered demos, and maintained 80%+ test coverage using Jest and RTL to ensure code quality and reliability.",
      tech: ["React", "SASS", "NPM", "Redux"],
      image: "/projects/npm-package.png",
      duration: "",
      github: "",
      live: "",
    },
    {
      title: "Toyota GTS Web App",
      description:
      "Worked on Toyota North America’s forklift telematics platform at Infosys. Built real-time data visualizations by consuming API data from SAP and multi-database architecture (Historical, Cosmos, App DB). Designed and developed complex dashboards using React and Power BI, including line, bar, donut, and mixed charts. Led the frontend team, drove best practices, conducted KT sessions, and provided continuous technical guidance to ensure smooth delivery.",
      tech: ["React", "Redux", "Kendo UI", "SASS"],
      image: "/projects/toyota-gts.png",
      duration: "",
      github: "",
      live: "",
    },
    {
      title: "Senvion India Pvt. Ltd. (Analytics)",
      description:
        "Developed analytics dashboards for wind turbine performance visualization using React, React Native, and Highcharts.",
      tech: ["React", "React Native", "Redux Persist", "Highcharts"],
      image: "/projects/senvion.png",
      duration: "",
      github: "",
      live: "",
    },
    {
      title: "Aditya Birla – Travel & Locator Mobile App",
      description:
        "Cross-platform travel and employee locator app with secure encryption, real-time geolocation, Google Maps, weather integration, and push notifications. Built end-to-end using Angular 2, Ionic, and Cordova.",
      tech: ["Angular 2", "Ionic 2", "Cordova", "HTML5", "CSS", "CryptoJS", "AWS Notifications"],
      image: "/projects/aditya-birla.png",
      duration: "",
    },
    {
      title: "LimeRoad – E-commerce for Jio Feature Phones",
      description:
        "Developed a lightweight e-commerce application optimized for Jio feature phones. Responsible for requirements, planning, UI development, and full SDLC execution.",
      tech: ["ReactJS", "Redux", "HTML", "CSS"],
      image: "/projects/limeroad.png",
      duration: "",
    },
    {
      title: "Zopper – E-commerce for Samsung Tizen",
      description:
        "Built an e-commerce mobile application for Samsung Tizen devices using AngularJS and Ionic. Delivered UI components, performance improvements, documentation, and deployment to the Tizen App Store.",
      tech: ["AngularJS", "Ionic", "Cordova", "HTML", "CSS", "jQuery"],
      image: "/projects/zopper.png",
      duration: "",
    },
    {
      title: "NASSCOM (nipp.tech) – Web Application",
      description:
        "Designed and developed the responsive frontend for NASSCOM’s innovation platform. Improved usability, ensured cross-device responsiveness, and coordinated with backend and UX teams for a seamless experience.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/projects/nasscom.png",
      duration: "",
    }
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
