import '../styles/sidebar.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import MainHeadline from './main-headline';
import CrossIcon from '../assets/icons/cross';
import { LinkedinIcon } from '../assets/icons/linkedin';
import { GmailIcon } from '../assets/icons/gmail';
import { GithubIcon } from '../assets/icons/github';
import { useGSAP } from '@gsap/react';

enum Colors {
  red = '#c14040',
  green = '#58ac3a',
}

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const timeline = useRef<GSAPTimeline>();

  function isActiveToggle() {
    setIsActive(!isActive);
  }

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
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.icon-cross',
        {
          fill: Colors.green,
        },
        {
          fill: Colors.red,
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.sidebar--socials',
        {
          y: -500,
        },
        {
          y: 0,
        },
        'sidebarAnimation',
      )
      .fromTo(
        '.sidebar--headline',
        {
          y: 500,
        },
        {
          y: 0,
        },
        'sidebarAnimation',
      );
  }, []);

  useGSAP(() => {
    isActive ? timeline.current?.play() : timeline.current?.reverse();
  }, [isActive]);

  return (
    <aside className='sidebar'>
      <button
        aria-label={isActive ? 'Enter the site' : 'Go back'}
        onClick={isActiveToggle}
        className='sidebar--button'
      >
        <CrossIcon />
      </button>
      <div className='sidebar--panels'>
        <div className='sidebar--socials sidebar--socials-vertical'>
          {/* Replace with prop (vertical, default) after Socials component creation ¨*/}
          <LinkedinIcon />
          <GmailIcon />
          <GithubIcon />
        </div>
        <div className='sidebar--headline'>
          <MainHeadline type='small' />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
