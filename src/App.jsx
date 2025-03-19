import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Certifications from './components/Certifications'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden bg-violet-200 text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed inset-0 -z-10 bg-white/50 backdrop-blur-lg"></div>

      <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen">
        <div className="container mx-auto px-8">

          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Timeline />} />
              <Route path="/certificates" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>

        </div>
      </div>

    </div>
  );
};

export default App;
