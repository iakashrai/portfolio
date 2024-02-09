import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar/Navbar';
import ContactMe from './Views/ContactMe';
import Experince from './Views/Experince';
import Home from './Views/LandingPage';
import Projects from './Views/Projects';
import Skills from './Views/Skills';

function App() {
  return (
    <div className="App overflow-hidden">
      <header className="App-header flex items-center justify-center p-5">
        <Navbar />
      </header>
      <Home />
      <Banner />
      <Experince />
      <Projects />    
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
