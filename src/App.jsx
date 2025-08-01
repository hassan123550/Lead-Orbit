import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import DocumentationPage from './components/DocumentationPage';
import GetStartedPage from './components/GetStartedPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Company from './components/Company';
import Features from './components/Features';
import Resources from './components/Resources';
import Documentation from './components/Documentation';
import Footer from './components/Footer';
import Team from './components/Team';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <main className="relative">
        <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient" />
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company" element={<Company />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation-page" element={<DocumentationPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="team" element={<Team />} />
       
        </Routes>

        <section id="company"><Company /></section>
        <section id="features"><Features /></section>
        <section id="resources"><Resources /></section>
        <section id="documentation"><Documentation /></section>
        <section id="team"><Team /></section>
          
        <Footer />

      </main>
    </Router>
  );
};

export default App;

