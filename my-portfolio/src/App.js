
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Mywork from './Components/Mywork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
  
   </div>
  );
}

export default App;
