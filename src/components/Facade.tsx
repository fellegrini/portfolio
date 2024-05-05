import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/facade.css';
import MainHeadline from './MainHeadline';
import Socials from './Socials';

function Facade({ isShown = true }) {
  useGSAP(() => {
    gsap.to('.facade', {
      x: !isShown ? 0 : -2550,
      ease: 'power1.inOut',
      duration: 0.6,
    });
  }, [isShown]);
  return (
    <section className='facade'>
      <div className='facade--container'>
        <MainHeadline type='big' />
        <Socials type='horizontal' />
      </div>
    </section>
  );
}

export default Facade;
