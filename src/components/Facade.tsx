import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MainHeadline from '@/components/MainHeadline';
import Socials from '@/components/Socials';
import '../styles/facade.css';
/**
 * The Facade component is a container that wraps the main headline and social
 * links. It's used to animate the elements in and out of view when the component is
 * toggled. The animation is controlled by the `isShown` prop, which should be
 * set to `true` when the component should be visible and `false` when it should be
 * hidden.
 *
 * The animation is triggered using GSAP and the `useGSAP` hook. The animation
 * uses match media queries to determine whether the user is on mobile/tablet or desktop.
 * Mobile/tablet: Vertical layout, panel moves upwards by 2500px.
 * Desktop: Horizontal layout, panel moves left by 2500px.
 *
 * The `isShown` prop should be set to `true` when the component is mounted and
 * `false` when it is unmounted. This will trigger the animation to run and
 * hide the component.
 *
 * @param {Object} props - The props passed to the Facade component.
 * @param {boolean} props.isShown - Whether the component should be visible or not.
 **/
function Facade({ isShown = true }: { isShown: boolean }) {
  /**
   * Use the `useGSAP` hook to set up the animation.
   */
  useGSAP(() => {
    /**
     * Create a match media query to detect whether the user is on a mobile or
     * desktop device.
     */
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      {
        isMobile: '(max-width: 1023px)',
        isDesktop: '(min-width: 1024px)',
      },
      (context) => {
        /**
         * Get the conditions object from the match media query.
         */
        const { conditions } = context;
        if (conditions) {
          /**
           * Extract the isMobile and isDesktop properties from the conditions
           * object.
           */
          const { isMobile, isDesktop } = conditions;
          /**
           * Set up the animation.
           */
          gsap.to('.facade', {
            x: !isShown ? 0 : isDesktop ? -2500 : 0,
            y: !isShown ? 0 : isMobile ? -2500 : 0,
            ease: 'power1.inOut',
            duration: 0.6,
            display: isShown ? 'none' : 'block',
          });
        }
      },
    );
  }, [isShown]);

  return (
    <section className='facade'>
      <div className='facade--container'>
        <div className='facade--sc'>
          <div className='circle'></div>
        </div>
        <MainHeadline type='big' />
        <Socials type='horizontal' />
      </div>
    </section>
  );
}

export default Facade;
