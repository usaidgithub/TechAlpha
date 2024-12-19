import './App.css';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import Internships from './components/Internships';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar/> 
        <HeroSection/> 
        <AboutUs/> 
        <Internships/> 
        <WhyChooseUs/>
        <HowItWorks/>
        <FAQs/>
        <ContactUs/>
        <Footer/>
        </>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
