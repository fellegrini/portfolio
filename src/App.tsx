import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import RouteProps

import Home from './pages/Home';
import About from './pages/About';
import WorkExperience from './pages/WorkExp';
import Projects from './pages/Projects';

// Define the App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/work-experience' Component={WorkExperience} />
        <Route path='/projects' Component={Projects} />

        {/* Default redirect to the home page */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
