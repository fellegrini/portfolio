import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { CrossIcon } from '@/assets/icons/cross';
import MainHeadline from '@/components/MainHeadline';
import Socials from '@/components/Socials';
import '../styles/sidebar.css';

enum Colors {
  Red = '#c14040',
  Green = '#58ac3a',
}

/**
 * The Sidebar component. This component is responsible for
 * animating the side panel when it's toggled on and off.
 */
function Sidebar({ sidebarTriggerHook }: { sidebarTriggerHook: (value: boolean) => void }) {
  /**
   * The state for whether the sidebar is active or not.
   */
  const [isActive, setIsActive] = useState(false);
  /**
   * The state for whether the sidebar button is active or not.
   * This is used to prevent the button from being clickable
   * while the sidebar is animating.
   */
  const [isButtonActive, setIsButtonActive] = useState(true);
  /**
   * A reference to the timeline created by useGSAP.
   */
  const timeline = useRef<GSAPTimeline>();

  /**
   * A function that toggles the sidebar on and off.
   * It updates the isActive state, toggles the isButtonActive state,
   * and triggers the sidebarTriggerHook callback.
   */
  const isActiveToggle = () => {
    sidebarTriggerHook(!isActive), setIsButtonActive(false), setIsActive(!isActive);
  };

  /**
   * Use the useGSAP hook to create a timeline that animates
   * the sidebar on and off.
   */
  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      /**
       * Add an event label to the timeline that we can use for triggering
       * animations.
       */
      .add('sidebarAnimation', '+=0')
      /**
       * Animate the sidebar button to spin around 180 degrees.
       */
      .fromTo(
        '.sidebar--button',
        {
          rotate: 45,
        },
        {
          rotate: 180,
          ease: 'power2',
          /**
           * When the animation is reversed, set isButtonActive back to true.
           */
          onReverseComplete: () => setIsButtonActive(true),
        },
        'sidebarAnimation',
      )
      /**
       * Animate the Cross icon to change color from green to red.
       */
      .fromTo(
        '.icon-cross',
        {
          fill: Colors.Green,
        },
        {
          fill: Colors.Red,
        },
        'sidebarAnimation',
      )
      /**
       * Animate the socials container to appear from off the screen.
       */
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
      /**
       * Animate the headline container to appear from off the screen.
       */
      .fromTo(
        '.sidebar--headline',
        {
          y: 500,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          /**
           * When the animation is complete, set isButtonActive back to true.
           */
          onComplete: () => setIsButtonActive(true),
        },
        'sidebarAnimation',
      );
  }, []);

  /**
   * Use the useGSAP hook to play or reverse the timeline depending on
   * whether the sidebar is active or not.
   */
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
