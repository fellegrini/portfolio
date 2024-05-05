import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MainHeadline from './MainHeadline';
import Socials from './Socials';
import '../styles/facade.css';

function Facade({ isShown = true }) {
  useGSAP(() => {
    gsap.to('.facade', {
      x: !isShown ? 0 : -2500,
      ease: 'power1.inOut',
      duration: 0.6,
    });
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
