import Image from "next/image";

const skills = [
  { name: "React.js & Next.js", level: "Advanced", width: "95%" },
  { name: "TypeScript & JavaScript", level: "Advanced", width: "95%" },
  { name: "Redux & State Management", level: "Advanced", width: "90%" },
  { name: "React Native", level: "Strong", width: "85%" },
  { name: "HTML, CSS & SCSS", level: "Advanced", width: "92%" },
  { name: "Python & FastAPI", level: "Working knowledge", width: "72%" },
];

const experience = [
  { period: "October 2021 — Present", role: "Specialist – Software Engineering", company: "LTM", details: "Progressed from Senior Software Developer to Specialist – Software Engineering, leading frontend technical direction and delivery across enterprise web experiences. Working across React, TypeScript, data visualisation and emerging GenAI-enabled capabilities." },
  { period: "May 2021 — Oct 2021", role: "Senior Software Developer", company: "Tech Mahindra", details: "Developed React UI components and reusable NPM packages for the BNSF North America application ecosystem." },
  { period: "Dec 2018 — Apr 2021", role: "Associate Consultant → Senior Associate Consultant", company: "Infosys", details: "Contributed to enterprise telematics applications for Toyota North America, building frontend features and collaborating across engineering and product teams." },
  { period: "Jun 2018 — Dec 2018", role: "Frontend Engineer – Analytics", company: "Senvion India", details: "Worked on analytics-focused web experiences and frontend features for wind energy applications." },
  { period: "Sep 2016 — May 2018", role: "Application Developer", company: "Divum Corporate Services", details: "Started my software development career building web application features and strengthening core frontend engineering skills." },
];

const education = [
  { period: "2016", qualification: "PG-Diploma, Embedded System Design", institute: "CDAC, Bangalore" },
  { period: "2011 — 2014", qualification: "B.E., Electronics & Communication", institute: "J.N. College of Technology, RGPV" },
  { period: "2008 — 2011", qualification: "Diploma, Electronics & Communication", institute: "JSPM’s Bhivrabai Sawant Polytechnic" },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I’m</p>
            <h1>Vikram <span>Kumar</span></h1>
            <div className="role-line">Frontend Engineering Specialist <span>·</span> Technical Lead</div>
            <p className="hero-description">I build responsive, reliable web and mobile experiences, and help engineering teams turn complex product requirements into clear, scalable solutions.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/vikramkumarverma/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn btn-outline" href="#experience">Explore my experience</a>
            </div>
            <div className="hero-footnote">10+ years in software engineering <span>·</span> Pune, India</div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-backdrop" />
            <Image src="/profile.jpg" alt="Vikram Kumar" width={640} height={800} priority className="hero-image" />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">A little about me</p><h2>About <span>Me</span></h2></div>
          <div className="about-grid">
            <div className="about-profile">
              <Image src="/profile.jpg" alt="Vikram Kumar profile" width={160} height={160} className="about-avatar" />
              <div className="profile-facts">
                <p><b>Name</b><span>Vikram Kumar</span></p>
                <p><b>Current role</b><span>Specialist – Software Engineering</span></p>
                <p><b>Experience</b><span>10+ years</span></p>
                <p><b>Location</b><span>Pune, India</span></p>
              </div>
              <div className="skill-bars">
                <h3>Core skills</h3>
                {skills.map((skill) => <div className="skill-bar" key={skill.name}><div className="skill-label"><span>{skill.name}</span><small>{skill.level}</small></div><div className="skill-track"><span style={{ width: skill.width }} /></div></div>)}
              </div>
            </div>
            <div className="about-copy">
              <h3>Frontend engineering with a focus on people, performance and product.</h3>
              <p>I’m a software engineering professional with more than a decade of experience delivering enterprise and consumer-facing web and mobile applications. My core expertise is frontend engineering with React, TypeScript and React Native, supported by experience in data visualisation, backend services and modern application architecture.</p>
              <p>Alongside hands-on development, I lead frontend delivery, guide technical decisions, review code, mentor engineers and collaborate with cross-functional teams to deliver dependable products.</p>
              <div className="about-details">
                <p><b>Profile</b><span>Frontend Engineering · Technical Leadership</span></p>
                <p><b>Core domain</b><span>Enterprise applications · Analytics · Data-rich interfaces</span></p>
                <p><b>Languages</b><span>English · Hindi</span></p>
                <p><b>Also work with</b><span>Python · FastAPI · SQL · MongoDB</span></p>
              </div>
              <a className="btn btn-primary" href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer">View résumé ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section resume-section">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow">Career journey</p><h2>Professional <span>Experience</span></h2><p>More than 10 years of building software, growing teams and delivering business-focused solutions.</p></div>
          <div className="experience-grid">{experience.map((item) => <article className="experience-card" key={item.period}><p className="experience-period">{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.details}</p></article>)}</div>
          <div className="section-heading education-heading"><p className="eyebrow">Learning foundation</p><h2>Education</h2></div>
          <div className="education-grid">{education.map((item) => <article className="education-card" key={item.qualification}><span>{item.period}</span><h3>{item.qualification}</h3><p>{item.institute}</p></article>)}</div>
          <div className="resume-download"><a className="btn btn-primary" href="/Vikramkumar-resume.pdf" target="_blank" rel="noreferrer">Download résumé ↗</a></div>
        </div>
      </section>

      <section id="expertise" className="section expertise-section">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow">What I work with</p><h2>Technical <span>Expertise</span></h2></div>
          <div className="expertise-grid">
            <article><span>01</span><h3>Frontend</h3><p>React.js, Next.js, TypeScript, JavaScript, Redux, React Native, Angular, HTML5, CSS3, SASS/SCSS</p></article>
            <article><span>02</span><h3>UI & visualisation</h3><p>Highcharts, AG Grid, Kendo UI, reusable component systems, responsive design and accessibility-minded interfaces</p></article>
            <article><span>03</span><h3>Backend & data</h3><p>Python, FastAPI, Node.js, REST APIs, SQL, PostgreSQL and MongoDB</p></article>
            <article><span>04</span><h3>Leadership & delivery</h3><p>Frontend architecture, technical direction, code reviews, mentoring, estimation and cross-functional collaboration</p></article>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-inner">
          <div><p className="eyebrow">Let’s connect</p><h2>Have a project or<br/><span>opportunity in mind?</span></h2><p>I’m open to conversations about frontend engineering, technical leadership and building meaningful digital products.</p></div>
          <div className="contact-links"><a href="mailto:vik.rama@yahoo.com">vik.rama@yahoo.com ↗</a><a href="https://www.linkedin.com/in/vikramkumarverma/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/vik-rama23" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
      </section>
    </>
  );
}
