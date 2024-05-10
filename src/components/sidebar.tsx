import '../styles/sidebar.css';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { CrossIcon } from '../assets/icons/cross';
import MainHeadline from './MainHeadline';
import Socials from './Socials';

enum Colors {
  Red = '#c14040',
  Green = '#58ac3a',
}

function Sidebar({ sidebarTriggerHook }: { sidebarTriggerHook: (value: boolean) => void }) {
  const [isActive, setIsActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);
  const timeline = useRef<GSAPTimeline>();

  const isActiveToggle = () => {
    sidebarTriggerHook(!isActive), setIsButtonActive(false), setIsActive(!isActive);
  };

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .add('sidebarAnimation', '+=0')
      .fromTo(
        '.sidebar--button',
        {
          rotate: 45,
        },
        {
          rotate: 180,
          ease: 'power2',
          onReverseComplete: () => setIsButtonActive(true),
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.icon-cross',
        {
          fill: Colors.Green,
          filter: 'drop-shadow(2px 1px 3px #58ac3a)',
        },
        {
          fill: Colors.Red,
          y: 2,
          filter: 'drop-shadow(-2px -1px 3px #c14040)',
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.sidebar--socials',
        {
          y: -500,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.sidebar--headline',
        {
          y: 500,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          onComplete: () => setIsButtonActive(true),
        },
        'sidebarAnimation',
      );
  }, []);

  useGSAP(() => {
    isActive ? timeline.current?.play() : timeline.current?.reverse();
  }, [isActive]);

  return (
    <aside className='sidebar'>
      <div className='sidebar--button-container'>
        <div className='sidebar--sc'></div>
        <button
          aria-label={!isActive ? 'Enter the site' : 'Go back'}
          onClick={isActiveToggle}
          className='sidebar--button'
          disabled={!isButtonActive}
        >
          <CrossIcon />
        </button>
      </div>
      <div className='sidebar--panels'>
        <div className='sidebar--socials'>
          <Socials type='vertical' />
        </div>
        <div className='sidebar--headline'>
          <MainHeadline type='small' />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
