import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactElement } from 'react';
import '../styles/container.css';

function Container({
  children,
  activeSectionHook,
  display = false,
}: {
  children: Array<ReactElement>;
  activeSectionHook: (sectionName: string) => void;
  display: boolean;
}) {
  useGSAP(() => {
    const sectionList: Array<HTMLElement> = gsap.utils.toArray('.container section');

    sectionList.forEach((section) => {
      gsap.to(section, {
        autoAlpha: 1,
        ease: 'back.in',
        duration: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'top 20%',
          end: 'bottom center',
          scroller: '.container',
          toggleActions: 'play reverse play reverse',
          //              onEnter onLeave onEnterBack onLeaveBack
          onEnter: () => {
            console.log(`${section.className} has entered into the viewport`);
          },
          onEnterBack: () => {
            console.log(`${section.className} has entered back into the viewport`);
          },
          onLeave: () => {
            console.log(`${section.className} has left the viewport`);
          },
          onToggle: (self) => {
            if (self.isActive) {
              const sectionName = section.className;
              const sectionContainer = section.querySelector(`.${sectionName}--container`);
              sectionContainer?.scrollTo(0, 0);
              activeSectionHook(sectionName);
            }
          },
        },
      });
    });
  }, [display]);

  return display && <div className='container'>{children}</div>;
}

export default Container;
