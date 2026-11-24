import PageWrapper from "@/components/MotionWrapper";
const groups = [
{title:"Frontend engineering",skills:"React.js · React Native · TypeScript · JavaScript · AngularJS · Angular 2"},
{title:"State management & UI",skills:"Redux · Redux Persist · Kendo UI · Ionic · Styled Components · AG-Grid"},
{title:"Web technologies",skills:"HTML5 · CSS3 · SASS/SCSS · Bootstrap"},
{title:"Data visualization",skills:"Highcharts · Kendo UI · Donut, Line, Bar, Heat Map and Stock Price charts"},
{title:"Backend & data",skills:"Node.js · Python · FastAPI · MongoDB · SQL"},
{title:"Tools & practices",skills:"GitLab · Jira · VS Code · Android Studio · Xcode · Unit testing · Code reviews · GenAI"}
];
export default function Skills(){return <PageWrapper><section className="section section-light"><div className="editorial-wrap"><div className="eyebrow">Technical toolkit</div><h1 className="section-heading">Tools for turning<br/>complexity into clarity.</h1><p className="section-intro">A practical mix of frontend technologies, visualization tools and backend familiarity built through more than a decade of product delivery.</p><div className="skill-groups">{groups.map(g=><article className="skill-group" key={g.title}><h3>{g.title}</h3><p>{g.skills}</p></article>)}</div><div className="mt-16 border-t border-stone-300 pt-8"><div className="eyebrow">Engineering principles</div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-sm text-stone-600"><p>Reusable UI components and modular frontend design</p><p>Unit testing, code reviews and defect resolution</p><p>Cross-device compatibility and performance optimization</p><p>Technical direction, mentoring and delivery coordination</p></div></div></div></section></PageWrapper>;}
