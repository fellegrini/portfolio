import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MainHeadline from './MainHeadline';
import Socials from './Socials';
import '../styles/facade.css';

function Facade({ isShown = true }) {
  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      {
        isMobile: '(max-width: 475px)',
        isTablet: '(max-width: 840x)',
        isDesktop: '(min-width: 841px)',
      },
      (context) => {
        const { conditions } = context;
        if (conditions) {
          const { isMobile, isDesktop } = conditions;
          gsap.to('.facade', {
            x: !isShown ? 0 : isDesktop ? -2500 : 0,
            y: !isShown ? 0 : isMobile ? -1200 : 0,
            ease: 'power1.inOut',
            duration: 0.6,
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
