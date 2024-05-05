import { useState } from 'react';
import Facade from './components/Facade';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import About from './pages/About';
import Tech from './pages/Tech';
import WorkExp from './pages/WorkExp';
import Projects from './pages/Projects';

// Define the App component
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarTriggerHook = (value: boolean) => {
    setSidebarOpen(value);
  };

  const activeSectionHook = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <Facade isShown={sidebarOpen} />
      <Header activeSection={activeSection} />
      <Sidebar sidebarTriggerHook={sidebarTriggerHook} />
      <Container activeSectionHook={activeSectionHook} display={sidebarOpen}>
        <About />
        <Tech />
        <WorkExp />
        <Projects />
      </Container>
    </>
  );
}

export default App;
