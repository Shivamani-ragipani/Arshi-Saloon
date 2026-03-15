import React from 'react';
import '../styles/hero.css';

const Hero = ({ onBookClick }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* BG */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
          alt="Arshi Salon"
        />
        <div className="hero__overlay" />
        <div className="hero__dots" />
      </div>

      <div className="container">
        <div className="hero__content">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Premium Unisex Salon &amp; SPA · Hyderabad
          </div>

          <h1 className="hero__title">
            Arshi
            <em>Unisex Saloon</em>
            &amp; SPA
          </h1>

          <div className="hero__ornament">
            <div className="hero__ornament-line" />
            <i className="fas fa-spa hero__ornament-icon" />
            <div className="hero__ornament-line" />
          </div>

          <p className="hero__tagline">
            Where beauty meets luxury, every single day.
          </p>

          <p className="hero__desc">
            Indulge in an unparalleled salon experience crafted for both men and women.
            From precision haircuts to rejuvenating spa treatments, we redefine
            the art of self-care in a sanctuary of elegance.
          </p>

          <div className="hero__actions">
            <button className="btn btn-gold" onClick={onBookClick}>
              <i className="fas fa-calendar-check" />
              Book Appointment
            </button>
            <button className="btn btn-ghost-white" onClick={() => scrollTo('services')}>
              Explore Services
              <i className="fas fa-arrow-right" />
            </button>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="hero__stats">
        {[
          { num: '12', suffix: '+', lbl: 'Years Experience' },
          { num: '5k', suffix: '+', lbl: 'Happy Clients'    },
          { num: '20', suffix: '+', lbl: 'Expert Stylists'  },
          { num: '4.9', suffix: '★', lbl: 'Google Rating'   },
        ].map(s => (
          <div className="hero__stat" key={s.lbl}>
            <span className="hero__stat-num">{s.num}<span>{s.suffix}</span></span>
            <span className="hero__stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* Scroll */}
      <div className="hero__scroll" onClick={() => scrollTo('services')}>
        <span className="hero__scroll-txt">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
