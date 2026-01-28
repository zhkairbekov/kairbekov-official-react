import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Designs from './components/Designs';
import Licenses from './components/Licenses';
import Contacts from './components/Contacts';
// import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [showTopElements, setShowTopElements] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      setShowTopElements(height >= 590);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="wrapper" className="wrapper">
      {/*<CustomCursor />*/}

      <Hero showTopElements={showTopElements} />
      
      <section className="razdel-bottom mb-2"></section>
      
      <Header />
      
      <section className="razdel-top mt-3"></section>
      
      <About />
      
      <section className="razdel-bottom mb-2"></section>
      
      <Services />
      
      <section className="razdel-top mt-3"></section>
      
      <Portfolio />
      
      <section className="razdel-bottom mb-2"></section>

      {/*<Designs />*/}

      <Licenses />
      
      <section className="razdel-top mt-3"></section>
      
      <Contacts />
    </div>
  );
}

export default App;
