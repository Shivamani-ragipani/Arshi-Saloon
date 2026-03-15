import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Home',      id: 'home' },
  { label: 'Services',  id: 'services' },
  { label: 'Gallery',   id: 'gallery' },
  { label: 'About',     id: 'about' },
  { label: 'Contact',   id: 'contact' },
];



const Navbar = ({ onBookClick }) => {

const phone = process.env.REACT_APP_PHONE_NUMBER || "+91 93476 5004";
const phoneLink = phone.replace("+", "");

  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="navbar__inner">

          {/* ── Logo ── */}
          <button className="navbar__logo" onClick={() => scrollTo('home')}>
            <div className="navbar__logo-img-wrap">
              <img src="/arshi_logo.png" alt="Arshi" className="navbar__logo-img"
                onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Arshi Unisex</span>
              <span className="navbar__logo-sub">Salon &amp; Spa</span>
            </div>
          </button>

          {/* ── Desktop nav ── */}
          <nav className="navbar__links">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Right ── */}
          <div className="navbar__right">
            <a href={`tel:${phoneLink}`} className="navbar__phone">
  <i className="fas fa-phone-alt"></i>
  <span>{phone}</span>
</a>
            <button className="navbar__book-btn" onClick={onBookClick}>
              Book Now
            </button>
            <button
              className={`navbar__ham ${menuOpen ? 'navbar__ham--open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="navbar__mobile">
          <button className="navbar__mobile-close" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times" />
          </button>

          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              className="navbar__mobile-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}

          <div className="navbar__mobile-divider" />

          <button className="navbar__mobile-book" onClick={() => { setMenuOpen(false); onBookClick(); }}>
            Book Appointment
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
