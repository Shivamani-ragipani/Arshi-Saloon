import React from 'react';
import Hero         from '../components/Hero';
import Services     from '../components/Services';
import About        from '../components/About';
import Gallery      from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact      from '../components/Contact';

const Home = ({ onBookClick }) => (
  <main>
    <Hero         onBookClick={onBookClick} />
    <Services     onBookClick={onBookClick} />
    <About        onBookClick={onBookClick} />
    <Gallery      onBookClick={onBookClick} />
    <Testimonials />
    <Contact      onBookClick={onBookClick} />
  </main>
);

export default Home;
