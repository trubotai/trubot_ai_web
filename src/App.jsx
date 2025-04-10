import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Solutions />
        <Collaboration />
        <Services />
        <About />
        <Career />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
