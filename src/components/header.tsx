import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/header.css';

const sectionNames = {
  about: 'About Me.',
  tech: 'Tech/ Tools.',
  workexp: 'Work Exp.',
  projects: 'Proj ects.',
};

function Header({ activeSection = 'Calculating' }: { activeSection: string }) {
  const heading = sectionNames[activeSection as keyof typeof sectionNames];
  const sectionList = Object.keys(sectionNames);

  useGSAP(() => {
    gsap.fromTo(
      '.header--text',
      {
        y: -350,
        autoAlpha: 0,
        ease: 'power3.inOut',
        duration: 0.3,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
    );
  }, [activeSection]);

  function scrollTo(section: string) {
    const container = document.querySelector('.container');
    container?.querySelector(`.${section}`)?.scrollIntoView();
  }

  return (
    <header className='header'>
      <h2 className='header--text'>{heading?.toUpperCase()}</h2>
      <div className='navbar'>
        {sectionList.map((section, index) => {
          return (
            <nav key={index} className={`navbar--nav ${activeSection === section ? 'active' : ''}`}>
              <button
                aria-label={`Navigation - ${section}`}
                className='navbar--button'
                onClick={() => {
                  scrollTo(section);
                }}
              ></button>
            </nav>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
