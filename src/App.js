import NavBar from "./component/NavBar";
import Features from "./section/Features";
import Footer from "./section/Footer";
import Gallery from "./section/Gallery";
import HeroSection from "./section/HeroSection";
import Partners from "./section/Partners";
import Testimonials from "./section/Testimonials";

function App() {
  return (
    <div className='bg-lightFromTopSM md:bg-lightFromTop items-center px-1 justify-center md:px-24 '>
      <NavBar />
      <HeroSection />
      <Features/>
      <Gallery/>
      <Partners/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

