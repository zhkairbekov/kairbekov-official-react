import { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
// const Designs = lazy(() => import('./components/Designs'));
const Licenses = lazy(() => import('./components/Licenses'));
const Contacts = lazy(() => import('./components/Contacts'));
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

      <Suspense fallback={null}>
        <About />
      </Suspense>
      
      <section className="razdel-bottom mb-2"></section>
      
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      
      <section className="razdel-top mt-3"></section>
      
      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>
      
      <section className="razdel-bottom mb-2"></section>

      {/*<Suspense fallback={null}><Designs /></Suspense>*/}

      <Suspense fallback={null}>
        <Licenses />
      </Suspense>
      
      <section className="razdel-top mt-3"></section>
      
      <Suspense fallback={null}>
        <Contacts />
      </Suspense>
    </div>
  );
}

export default App;
