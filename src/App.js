import './App.css';
import { motion, useScroll, useSpring} from "framer-motion";
import Banner from './Components/Banner';
import Navbar from './Components/Navbar/Navbar';
import About from './Views/About';
import ContactMe from './Views/ContactMe';
import Experince from './Views/Experince';
import Home from './Views/LandingPage';
import Projects from './Views/Projects';
import Skills from './Views/Skills';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App max-w-screen-xl mx-auto">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <header className="App-header flex items-center justify-center p-3 md:p-5">
          <Navbar />
        </header>
        <Home />
        <Banner />
        <About />
        <Experince />
        <Projects />    
        <Skills />
        <ContactMe />
    </div>
  );
}

export default App;
