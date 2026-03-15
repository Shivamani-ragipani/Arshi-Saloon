import React from 'react';
import '../styles/footer.css';

const QUICK_LINKS = [
  { label:'Home',      id:'home'      },
  { label:'Services',  id:'services'  },
  { label:'Gallery',   id:'gallery'   },
  { label:'About Us',  id:'about'     },
  { label:'Contact',   id:'contact'   },
];

const SERVICE_LINKS = [
  'Hair Services','Beauty Services','Spa Treatments',
  "Men's Grooming",'Bridal Packages',
];

const SOCIALS = [
  { icon:'fab fa-instagram', href:'https://instagram.com',        label:'Instagram' },
  { icon:'fab fa-facebook-f',href:'https://facebook.com',        label:'Facebook'  },
  { icon:'fab fa-whatsapp',  href:'https://wa.me/919347465004',  label:'WhatsApp'  },
  { icon:'fab fa-youtube',   href:'https://youtube.com',         label:'YouTube'   },
];

const Footer = ({ onBookClick }) => {

  const phone = process.env.REACT_APP_PHONE_NUMBER || "+91 93476 5004";
const phoneLink = phone.replace("+", "");

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__watermark">Arshi</div>

      {/* CTA band */}
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-inner">
            <p className="footer__cta-text">
              Ready for your <span>transformation?</span> We're here for you.
            </p>
            <button className="btn btn-gold" onClick={onBookClick} style={{ fontSize:12 }}>
              <i className="fas fa-calendar-check" />
              Book Now - It's Free
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__brand-logo">
                <img
                  src="/arshi_logo.png" alt="Arshi Logo"
                  className="footer__brand-logo-img"
                  onError={e => { e.target.style.display='none'; }}
                />
                <div>
                  <div className="footer__brand-name">Arshi Unisex<br />Saloon &amp; SPA</div>
                  <span className="footer__brand-sub">Est. 2013 · Hyderabad</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                A premium unisex salon and spa delivering luxury beauty and wellness
                experiences for over a decade. Your beauty is our passion, your
                satisfaction is our promise.
              </p>
              <div className="footer__socials">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="footer__social" aria-label={s.label}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
              {/* Rating */}
              <div className="footer__rating">
                <div className="footer__rating-stars">
                  {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star" />)}
                </div>
                <span className="footer__rating-txt">4.9 / 5 on Google</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer__col-title">Quick Links</div>
              <ul className="footer__links">
                {QUICK_LINKS.map(l => (
                  <li key={l.id}>
                    <button onClick={() => scrollTo(l.id)}>{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="footer__col-title">Our Services</div>
              <ul className="footer__links">
                {SERVICE_LINKS.map(s => (
                  <li key={s}>
                    <button onClick={() => scrollTo('services')}>{s}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer__col-title">Contact Us</div>
              <div className="footer__contact-row">
                <i className="fas fa-map-marker-alt" />
                <span>
                  Sai Sri Nivas, 2nd Floor<br />
                  Near KNM Smile Dental Hospital<br />
                  Chaitanya Puri, Hyderabad – 500060
                </span>
              </div>
              <div className="footer__contact-row">
                <a href={`tel:${phoneLink}`} className="navbar__phone">
  <i className="fas fa-phone-alt"></i>
  <span>{phone}</span>
</a>
              </div>
              <div className="footer__contact-row">
                <i className="fas fa-envelope" />
                <a href="mailto:hello@arshisaloon.com">hello@arshisaloon.com</a>
              </div>
              <div className="footer__contact-row">
                <i className="fas fa-clock" />
                <span>Mon–Sat: 9AM–8PM · Sun: 10AM–6PM</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Arshi Unisex Saloon &amp; SPA. All rights reserved.
              {' '}Made with ❤️ in Hyderabad.
            </p>
            <div className="footer__bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
