import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Geo } from '../../assets/icons/geo';
import { Year } from '../../assets/icons/year';
import './index.css';

function About() {
  const imgUrl = new URL('../../assets/img/profile.webp', import.meta.url).href;
  useGSAP(() => {
    gsap.from(['.about--footer', '.about--marquee'], {
      yPercent: 100,
      duration: 0.4,
      ease: 'circl.in',
      delay: 0.4,
      stagger: 0.1,
    });
    gsap.to('.about--image', {
      filter: 'grayscale(0)',
      delay: 0.8,
      duration: 0.8,
      ease: 'power3.inOut',
    });
  }),
    [];
  return (
    <section id='about' className='about'>
      <div className='about--text text'>
        <p>
          I am a front-end developer with a passion for crafting immersive digital experiences. With
          a meticulous approach to code and design, I specialize in creating engaging and
          user-friendly websites that leave a lasting impression. From sleek and modern UI to
          interactive features, I leverage tech to bring ideas to life.
        </p>
      </div>
      <img src={imgUrl} alt="Federico Pellegrini's profile pic" className='about--image' />
      <div className='about--footer'>
        <Year />
        <div className='about--marquee'>
          <Geo />
        </div>
      </div>
    </section>
  );
}

export default About;
