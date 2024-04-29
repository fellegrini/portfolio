import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactElement } from 'react';

function Container({ children }: { children: Array<ReactElement> }) {
  useGSAP(() => {
    const sectionList: Array<HTMLElement> = gsap.utils.toArray('section');

    sectionList.forEach((section) => {
      gsap.to(section, {
        background: 'black',
        ease: 'back.in',
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'top 20%',
          end: 'bottom center',
          scroller: '.container',
          markers: true,
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
              console.log(`${section.className} has become active`);
              // Aimation or logic for when the section comes into view
            } else {
              // Animation or logic for when the section goes out of view
            }
          },
        },
      });
    });
  }, []);

  return <div className='container'>{children}</div>;
}

export default Container;
