import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactElement } from 'react';
import '../styles/container.css';
/**
 * The Container component is a wrapper for the content of the page. It handles
 * the animation of the sections and triggers a callback function when a section
 * comes into view.
 *
 * @param {Object} props - The props passed to the Container component.
 * @param {Array<ReactElement>} children
 * @param {function(string):void} activeSectionHook - A callback function that
 * is triggered when a section becomes active. The callback function takes a string
 * argument which is the name of the active section.
 * @param {boolean} display
 */
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
    /**
     * Get all the sections in the container and store them in an array.
     */
    const sectionList: Array<HTMLElement> = gsap.utils.toArray('.container section');
    /**
     * Loop through the array of sections and set up the animation.
     */
    sectionList.forEach((section) => {
      /**
       * Animate the section by setting its autoAlpha to 1 and using an ease of
       * 'back.in'. The duration of the animation is 0.4 seconds.
       */
      gsap.to(section, {
        autoAlpha: 1,
        ease: 'back.in',
        duration: 0.4,
        /**
         * The trigger will toggle the animation and call the
         * `activeSectionHook` when the section becomes active.
         */
        scrollTrigger: {
          /**
           * The trigger is set to the section itself.
           */
          trigger: section,
          /**
           * The trigger is set to start animating when the top of the section is
           * 20% of the way down the viewport.
           */
          start: 'top 20%',
          /**
           * The trigger is set to stop animating when the bottom of the section
           * is at the center of the viewport.
           */
          end: 'bottom center',
          scroller: '.container',
          toggleActions: 'play reverse play reverse',
          onToggle: (self) => {
            if (self.isActive) {
              /**
               * Get the name of the active section and call the
               * `activeSectionHook` with it.
               */
              const sectionName = section.className;
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
