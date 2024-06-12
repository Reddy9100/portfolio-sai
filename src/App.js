import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spin size="large" />
  </div>
);

const LandingPage = React.lazy(() => import('./components/LandingPAge'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));
const Services = React.lazy(() => import('./components/Services'));
const Certificates = React.lazy(() => import('./components/Certificates'));
const Projects = React.lazy(()=> import("./components/Projects")) 

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}> 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
