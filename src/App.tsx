import Home from './pages/Home';
import About from './pages/About';
import WorkExp from './pages/WorkExp';
import Projects from './pages/Projects';
import Container from './components/container';

// Define the App component
function App() {
  return (
    <Container>
      <Home />
      <About />
      <WorkExp />
      <Projects />
    </Container>
  );
}

export default App;
