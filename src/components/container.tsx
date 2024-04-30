import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactElement } from 'react';
import '../styles/container.css';

function Container({
  children,
  activeSectionHook,
}: {
  children: Array<ReactElement>;
  activeSectionHook: (sectionName: string) => void;
}) {
  useGSAP(() => {
    const sectionList: Array<HTMLElement> = gsap.utils.toArray('section');

    sectionList.forEach((section) => {
      gsap.to(section, {
        autoAlpha: 1,
        background: '#000',
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
              activeSectionHook(sectionName);
            }
          },
        },
      });
    });
  }, []);

  return <div className='container'>{children}</div>;
}

export default Container;
