import '../styles/header.css';

enum sectionNames {
  home = 'Homepage.',
  about = 'About Me.',
  workexp = 'Work Exp.',
  projects = 'Projects.',
}

function Header({ activeSection = 'Calculating' }: { activeSection: string }) {
  const heading = sectionNames[activeSection as keyof typeof sectionNames];
  const sectionList = Object.keys(sectionNames);

  return (
    <header className='header'>
      <h2 className='header--text'>{heading?.toUpperCase()}</h2>
      <div className='navbar'>
        {sectionList.map((section, index) => {
          return (
            <nav key={index} className={`navbar--nav ${activeSection === section ? 'active' : ''}`}>
              <button
                className='navbar--button'
                onClick={() => {
                  document.querySelector(`.${section}`)?.scrollIntoView();
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
