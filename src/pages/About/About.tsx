import { Geo } from '../../assets/icons/geo';
import { Year } from '../../assets/icons/year';
import './index.css';

function Home() {
  return (
    <section id='about' className='about'>
      <div className='about--text text'>
        <p>
          I am a passionate brand designer with a keen eye for creating impactful visual identities.
          With a deep understanding of the power of branding, I strive to craft compelling designs
          that not only capture attention but also communicate the essence and values of a brand.
        </p>
      </div>
      <img
        src='/src/assets/img/profile.jpg'
        alt="Federico Pellegrini's profile pic"
        className='about--image'
      />
      <div className='about--footer'>
        <Year />
        <Geo />
      </div>
    </section>
  );
}

export default Home;
