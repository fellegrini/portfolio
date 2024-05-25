import Experience from '@/components/Experience';
import './index.css';

const workExpData = [
  {
    year: '2024',
    position: 'Front-End Developer.',
    company: 'FREELANCE',
    featuredTech: ['React', 'TypeScript', 'React Router', 'Vite', 'GSAP', 'Vercel', 'Webflow'],
    summary: [
      'Developed SPAs using React 18, React Router, Vite and GSAP 3.',
      'No-code development using Webflow.',
    ],
  },
  {
    year: '2023',
    position: 'Tech Lead.',
    company: 'MEDIA.MONKS',
    featuredTech: [
      'Flask',
      'Jinja',
      'TypeScript',
      'Lit',
      'Vite',
      'GSAP',
      'GCloud',
      'Vue',
      'MobX',
      'Sass',
    ],
    summary: [
      'Spearheaded technology initiatives, contributing to the development of high-quality, accessible (WCAG 2.1 AA) and high-performant software products.',
      'Collaborated with other marketing agencies working with the client in the coordination of pull requests into shared code bases, carrying out extensive regression testing and reviews of HTML, CSS/SCSS and JS/TS code to ensure compliance with Google’s style guides.',
      'Led a team of 4 people, providing technical feedback and organizing their tasks based on seniority, specialty and personal objectives.',
    ],
  },
  {
    year: '2020',
    position: 'Software Eng./Release Manager.',
    company: 'R/GA',
    featuredTech: ['Flask', 'Jinja', 'TypeScript', 'Material UI', 'GCloud', 'Sass', 'YAML'],
    summary: [
      'Added new sections and functionalities to over 50 statically-rendered websites using JavaScript, TypeScript, Flask, and a custom CMS.',
      "Contributed to the development and maintenance of features of a framework-agnostic library of reusable UI components based on Google's Marketing Web Standards, which reduced our development times by 50%",
      'Participated in the content engineering of various projects, also managing the localization (l10n) and internationalization (i18n) processes in close collaboration with producers, clients and translation vendors.',
      'Performed code reviews for both internal and external teams, including temporary contractors located at other marketing agencies.',
    ],
  },
  {
    year: '2018',
    position: 'Front-End Developer.',
    company: 'B.A. CITY GOV',
    featuredTech: ['Angular', 'jQuery', 'TypeScript', 'Bootstrap'],
    summary: [
      'Contributed to the digitalization of all administrative procedures and government communications through the development of the Electronic Document Management System (SADE), commissioned by the Executive Branch of the City Government.',
      'Successfully deployed the first module of the platform, Single Desktop (EU), which became a tool of daily use for more than 35,000 users.',
      'Built and maintained Coda’s web and mobile apps using React, TypeScript, Styled Components, and Next.js',
    ],
  },
];

function WorkExp() {
  return (
    <section className='workexp'>
      <div className='workexp--container'>
        {workExpData.map((workExp) => (
          <Experience experienceData={workExp} key={workExp.year} />
        ))}
      </div>
    </section>
  );
}

export default WorkExp;
