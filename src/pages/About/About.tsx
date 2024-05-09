import { Geo } from '../../assets/icons/geo';
import { Year } from '../../assets/icons/year';
import './index.css';

function About() {
  return (
    <section id='about' className='about'>
      <div className='about--text text'>
        <p>
          I am a front-end developer with a passion for crafting immersive digital experiences. With
          a meticulous approach to code and design, I specialize in creating engaging and
          user-friendly websites that leave a lasting impression. From sleek and modern interfaces
          to interactive features, I leverage the latest tech to bring ideas to life.
        </p>
      </div>
      <img
        src='/src/assets/img/profile.jpg'
        alt="Federico Pellegrini's profile pic"
        className='about--image'
      />
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
