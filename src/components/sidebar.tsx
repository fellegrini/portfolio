import '../styles/sidebar.css';
import { useState } from 'react';
import gsap from 'gsap';
import MainHeadline from './main-headline';
import CrossIcon from '../assets/icons/cross';
import { LinkedinIcon } from '../assets/icons/linkedin';
import { GmailIcon } from '../assets/icons/gmail';
import { GithubIcon } from '../assets/icons/github';

enum Colors {
  red = '#c14040',
  green = '#58ac3a',
}

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const isActiveToggle = () => {
    isActive ? timeline.play() : timeline.reverse();
    setIsActive(!isActive);
  };

  const timeline = gsap.timeline();
  timeline.fromTo(
    '.sidebar--button',
    {
      rotate: 0,
    },
    {
      rotate: 90,
      duration: 3,
      ease: 'elastic.inOut',
    },
  );

  return (
    <aside className='sidebar'>
      <button
        aria-label={isActive ? 'Enter the site' : 'Go back'}
        onClick={isActiveToggle}
        className='sidebar--button'
      >
        <CrossIcon fill={isActive ? Colors.red : Colors.green} />
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
