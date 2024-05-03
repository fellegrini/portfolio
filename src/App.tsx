import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import WorkExp from './pages/WorkExp';
import Projects from './pages/Projects';
import Container from './components/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Define the App component
function App() {
  const [activeSection, setActiveSection] = useState('');

  const activeSectionHook = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header activeSection={activeSection} />
      <Container activeSectionHook={activeSectionHook}>
        <Sidebar />
        <Home />
        <About />
        <WorkExp />
        <Projects />
      </Container>
    </>
  );
}

export default App;
