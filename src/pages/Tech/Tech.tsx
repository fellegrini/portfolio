import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TechPanel from '../../components/TechPanel';
import './index.css';

const techPanels = [
  {
    category: 'Code.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita incidunt nulla magnam possimus quam, nobis minus quasi. Esse aspernatur illo mollitia ea eius expedita assumenda consectetur autem aperiam velit.',
    techList: ['html', 'css', 'js', 'ts'],
  },
  {
    category: 'Frameworks.',
    sub: 'Libraries,',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita incidunt nulla magnam possimus quam, nobis minus quasi. Esse aspernatur illo mollitia ea eius expedita assumenda consectetur autem aperiam velit.',

    techList: ['react', 'lit', 'angular', 'flask', 'sass', 'material', 'gsap', 'mobx', 'rxjs'],
  },
  {
    category: 'Operations.',
    description:
      'I use Figma and AdobeXD for my design projects. I use VSCode for my coding projects. I use Figma and AdobeXD for my design projects.',
    techList: ['git', 'bitbucket', 'webpack', 'vite', 'gcloud', 'jira'],
  },
];

function Tech() {
  const panelList: Array<HTMLElement> = gsap.utils.toArray('.tech-panel');
  /* const timeline = gsap.timeline({ defaults: { duration: 1, paused: true } }); */

  useGSAP(() => {
    panelList.forEach(() => {});
  }, [panelList]);

  return (
    <section className='tech'>
      <div className='tech--container'>
        {techPanels.map((techPanel) => (
          <TechPanel panelData={techPanel} key={techPanel.category} />
        ))}
      </div>
    </section>
  );
}

export default Tech;
