import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { iconMap } from '../assets/icons/tech/map';
import gsap from 'gsap';
import '../styles/tech-panel.css';

type PanelDataType = {
  category: string;
  sub?: string;
  description: string;
  techList: Array<string>;
};

function TechPanel({ panelData }: { panelData: PanelDataType }) {
  const [isPanelActive, setIspanelActive] = useState(false);
  useGSAP(() => {
    gsap.to('.tech-panel', {
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);
  return (
    <div
      className={`tech-panel ${isPanelActive ? 'tech-panel--active' : ''}`}
      onMouseEnter={() => setIspanelActive(true)}
      onMouseLeave={() => setIspanelActive(false)}
    >
      {panelData.sub ? <span className='tech-panel--headline-sub'>{panelData.sub}</span> : ''}
      <h3 className='tech-panel--headline'>{panelData.category}</h3>
      <p className='tech-panel--description'>{panelData.description}</p>
      <ul className='tech-panel--list-container'>
        {panelData.techList.map((tech) => (
          <li className='tech-panel--list-item' key={tech}>
            {iconMap[tech]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechPanel;
