import './App.css';
import Footer from './components/footer';
import Navigator from './components/navigator';
import './index.css';

import Index from './pages';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Projects from './pages/projects';
import { Routes, Route } from "react-router-dom";
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Navigator />
      {/* <Marquee rtl={false} /> */}
      {/* <div className='max-width'> */}
      {/* <Index /> */}
      {/* <Experience /> */}
      {/* <Contact/> */}
      {/* <Projects /> */}
      {/* </div> */}
      {/* <div className='bottom-marquee'> */}
      {/* <Marquee rtl={true}/> */}
      {/* </div> */}

     <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route  path="/dashboard" element={<Dashboard />} /> */}
        <Route  path="/projects" element={<Projects />} />
        <Route  path="/experience" element={<Experience />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/about" element={<About />} />
      </Routes>
     <Footer />

    </div>
  );
}

export default App;
