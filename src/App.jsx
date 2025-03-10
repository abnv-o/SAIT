import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Parallax from "./components/parallax/page";


// Page components
const Home = () => (
  <>
    <Hero />
    <div className="bg-[#0a0a0a] w-full">
      <About />
    </div>
    <Features />
    <Parallax />
  </>
);

const Events = () => (
  <div className="pt-24">
    <Features />
  </div>
);

const News = () => (
  <div className="pt-24">
    <Story />
  </div>
);

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={
            <div className="bg-[#0a0a0a] w-full pt-24">
              <About />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
