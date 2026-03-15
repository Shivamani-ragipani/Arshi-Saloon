import React, { useRef } from 'react';
import '../styles/services.css';

const SERVICE_CATEGORIES = [
  {
    id: 'hair',
    icon: '✂️',
    title: 'Hair Services',
    subtitle: 'Expert cuts, color & styling for every hair type',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.1)',
    services: [
      { name: 'Haircut (Women)', desc: 'Precision cut tailored to your face shape and style preference', price: '₹499' },
      { name: 'Haircut (Men)', desc: 'Classic to modern cuts with expert styling finish', price: '₹299' },
      { name: 'Kids Haircut', desc: 'Gentle, fun haircuts for children up to 12 years', price: '₹199' },
      { name: 'Hair Styling', desc: 'Blow-dry, curls, straightening or special occasion styling', price: '₹599' },
      { name: 'Hair Coloring', desc: 'Global, highlights, balayage and creative color techniques', price: '₹1,499' },
      { name: 'Hair Smoothening', desc: 'Keratin treatment for frizz-free, silky smooth hair', price: '₹3,999' },
      { name: 'Hair Rebonding', desc: 'Permanent straightening for sleek, straight hair', price: '₹4,999' },
      { name: 'Hair Treatment', desc: 'Deep conditioning, protein and repair treatments', price: '₹999' },
    ],
  },
  {
    id: 'beauty',
    icon: '💄',
    title: 'Beauty Services',
    subtitle: 'Facials, threading, waxing and professional makeup',
    color: '#E8C5B0',
    bg: 'rgba(232,197,176,0.15)',
    services: [
      { name: 'Classic Facial', desc: 'Deep cleanse, exfoliation, and hydration for glowing skin', price: '₹799' },
      { name: 'Gold Facial', desc: 'Luxury gold-infused facial for anti-aging and brightening', price: '₹1,499' },
      { name: 'Threading (Eyebrows)', desc: 'Precise eyebrow shaping by expert threading artists', price: '₹99' },
      { name: 'Threading (Face)', desc: 'Full face thread including upper lip, chin, forehead', price: '₹299' },
      { name: 'Waxing (Arms)', desc: 'Smooth, long-lasting hair removal using premium wax', price: '₹399' },
      { name: 'Waxing (Legs)', desc: 'Full leg waxing for silky smooth skin', price: '₹699' },
      { name: 'Full Body Wax', desc: 'Complete body waxing for total smoothness', price: '₹1,999' },
      { name: 'Party Makeup', desc: 'Flawless makeup for events, parties and celebrations', price: '₹1,499' },
    ],
  },
  {
    id: 'spa',
    icon: '🌿',
    title: 'Spa Treatments',
    subtitle: 'Relax and rejuvenate with our premium spa menu',
    color: '#A8C9A0',
    bg: 'rgba(168,201,160,0.15)',
    services: [
      { name: 'Head Massage', desc: 'Stress-relieving scalp and head massage with oils', price: '₹499' },
      { name: 'Swedish Body Massage', desc: 'Full body relaxation massage with aromatic oils', price: '₹1,999' },
      { name: 'Deep Tissue Massage', desc: 'Therapeutic massage targeting deep muscle tension', price: '₹2,499' },
      { name: 'Hair Spa', desc: 'Nourishing hair spa treatment with deep conditioning', price: '₹999' },
      { name: 'Skin Treatment', desc: 'Advanced skin therapy for radiant, healthy skin', price: '₹1,499' },
      { name: 'Manicure', desc: 'Professional nail care with polish and hand treatment', price: '₹499' },
      { name: 'Pedicure', desc: 'Relaxing foot care with scrub, massage and nail polish', price: '₹699' },
      { name: 'Foot Massage', desc: 'Reflexology and pressure point foot massage', price: '₹599' },
    ],
  },
  {
    id: 'mens',
    icon: '/avatar-7.png',
    title: "Men's Grooming",
    subtitle: 'Dedicated grooming services crafted for men',
    color: '#A0B8C9',
    bg: 'rgba(160,184,201,0.15)',
    services: [
      { name: 'Haircut & Styling', desc: 'Modern and classic cuts with blow-dry finish', price: '₹399' },
      { name: 'Beard Styling', desc: 'Beard shaping, trimming and grooming to perfection', price: '₹299' },
      { name: 'Clean Shave', desc: 'Classic hot-towel shave for a smooth, clean finish', price: '₹199' },
      { name: 'Hair Color (Men)', desc: 'Natural-looking color or fashion shades for men', price: '₹999' },
      { name: 'Facial (Men)', desc: "Deep cleansing facial designed for men's skin", price: '₹699' },
      { name: 'D-Tan Pack', desc: 'Tan removal treatment for face and neck', price: '₹499' },
      { name: 'Head Massage', desc: 'Relaxing oil massage for scalp and head', price: '₹399' },
      { name: 'Grooming Package', desc: 'Complete haircut + beard + facial combo package', price: '₹1,299' },
    ],
  },
  {
    id: 'bridal',
    icon: '/avatar-3.png',
    title: 'Bridal Packages',
    subtitle: 'Complete bridal services for your most special day',
    color: '#F5C6D4',
    bg: 'rgba(245,198,212,0.15)',
    services: [
      { name: 'Bridal Makeup', desc: 'Full professional bridal makeup with premium products', price: '₹4,999' },
      { name: 'Pre-Bridal Package', desc: 'Complete pre-bridal skin & hair prep package', price: '₹7,999' },
      { name: 'Bridal Mehendi', desc: 'Intricate bridal mehendi by skilled artists', price: '₹2,999' },
      { name: 'Groom Package', desc: 'Complete grooming package for the groom', price: '₹2,499' },
      { name: 'Party Makeup', desc: 'Glam makeup for bridesmaids and family', price: '₹1,999' },
      { name: 'Saree Draping', desc: 'Expert saree draping in various styles', price: '₹599' },
      { name: 'Bridal Hair Styling', desc: 'Elaborate updo or open hair styling for brides', price: '₹2,499' },
      { name: 'Full Bridal Package', desc: 'Everything included — makeup, hair, mehendi, and more', price: '₹14,999' },
    ],
  },
];

const ServiceCard = ({ service, color, onBook }) => (
  <div className="service-card" onClick={onBook} style={{ '--card-accent': color }}>
    <div className="service-card__dot" style={{ background: color }} />
    <h3 className="service-card__name">{service.name}</h3>
    <p className="service-card__desc">{service.desc}</p>
    <div className="service-card__footer">
      <span className="service-card__price">{service.price}</span>
      <span className="service-card__book">
        Book <i className="fas fa-arrow-right" />
      </span>
    </div>
  </div>
);

const Services = ({ onBookClick }) => {
  const navRef = useRef(null);

  const scrollToCategory = (id) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderIcon = (icon) => {
    if (icon.startsWith('/')) {
      return <img src={icon} alt="" className="services__icon-img" />;
    }
    return <span>{icon}</span>;
  };

  return (
    <section className="services" id="services">
      <div className="services__watermark">SERVICES</div>

      <div className="container">
        <div className="services__header">
          <span className="eyebrow">What We Offer</span>
          <h2 className="heading-serif">
            Our <em>Signature</em> Services
          </h2>
          <p>
            From a quick trim to a full luxury spa day — we have every service
            you need to look and feel extraordinary.
          </p>
        </div>
      </div>

      <div className="services__nav" ref={navRef}>
        <div className="container">
          <div className="services__nav-inner">
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className="services__nav-btn"
                onClick={() => scrollToCategory(cat.id)}
              >
                {renderIcon(cat.icon)}
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {SERVICE_CATEGORIES.map(cat => (
          <div className="services__category" key={cat.id} id={`cat-${cat.id}`}>
            <div className="services__cat-header">
              <div className="services__cat-icon" style={{ background: cat.bg }}>
                {renderIcon(cat.icon)}
              </div>
              <div>
                <div className="services__cat-title">{cat.title}</div>
                <div className="services__cat-sub">{cat.subtitle}</div>
              </div>
            </div>

            <div className="services__grid">
              {cat.services.map(service => (
                <ServiceCard
                  key={service.name}
                  service={service}
                  color={cat.color}
                  onBook={onBookClick}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="services__cta">
          <button className="btn btn-dark" onClick={onBookClick}>
            <i className="fas fa-calendar-check" />
            Book Your Session Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
export { SERVICE_CATEGORIES };