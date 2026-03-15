import React from 'react';
import '../styles/about.css';

const VALUES = [
  { icon: '❤️', title: 'Passion for Beauty',    text: 'We genuinely love what we do. Every appointment is a chance to make someone feel extraordinary.' },
  { icon: '✨', title: 'Excellence Always',      text: 'We never compromise on quality — from the products we use to the techniques we apply.' },
  { icon: '👥', title: 'Client-Centered',        text: 'Your comfort, preferences, and satisfaction are at the heart of every service we provide.' },
  { icon: '🏆', title: 'Continuous Learning',    text: 'Our stylists regularly train at top academies to bring you the latest trends and techniques.' },
];

const TEAM = [
  { name: 'Arshi Khan',    role: 'Founder & Creative Director', spec: 'Hair Coloring, Balayage & Bridal Styling', exp: '15 Years', emoji: '👩‍🎨' },
  { name: 'Riya Sharma',   role: 'Senior Stylist',              spec: 'Precision Cuts & Hair Treatments',         exp: '10 Years', emoji: '💇‍♀️' },
  { name: 'Kavya Reddy',   role: 'Beauty & Makeup Artist',      spec: 'Bridal Makeup & Skin Treatments',          exp: '8 Years',  emoji: '💄' },
  { name: 'Suresh Patel',  role: "Men's Grooming Expert",       spec: 'Classic Cuts, Beard Styling & Shaving',   exp: '12 Years', emoji: '💈' },
  { name: 'Meena Das',     role: 'Spa & Wellness Therapist',    spec: 'Massages, Body Treatments & Relaxation',  exp: '9 Years',  emoji: '🌿' },
  { name: 'Priya Nair',    role: 'Nail Artist',                 spec: 'Nail Extensions, Gel & Nail Art',         exp: '6 Years',  emoji: '💅' },
];

const MILESTONES = [
  { year: '2013', event: 'Arshi Salon opens its doors in Chaitanya Puri, Hyderabad' },
  { year: '2016', event: 'Expanded to full spa services and bridal packages' },
  { year: '2018', event: "Awarded 'Best Salon in Hyderabad' by Beauty India Magazine" },
  { year: '2020', event: 'Welcomed our 3,000th satisfied client milestone' },
  { year: '2022', event: 'Launched premium spa wing with advanced skin treatments' },
  { year: '2024', event: 'Celebrating 10+ years of beauty excellence' },
];

const STATS = [
  { num: '10+',   lbl: 'Years in Business' },
  { num: '5,000+', lbl: 'Happy Clients'    },
  { num: '20+',   lbl: 'Expert Stylists'   },
  { num: '50+',   lbl: 'Services Offered'  },
];

const About = ({ onBookClick }) => (
  <div id="about">

    {/* ═══════════════════ STORY SECTION ═══════════════════ */}
    <section className="about" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="about__inner">

          {/* Visuals */}
          <div className="about__visuals">
            <div className="about__badge-years">
              <span className="about__badge-num">12+</span>
              <span className="about__badge-lbl">Years of<br />Excellence</span>
            </div>

            <div className="about__img-main">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                alt="Arshi Salon interior"
              />
            </div>

            <div className="about__img-float">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80"
                alt="Salon team"
              />
            </div>

            <div className="about__stats">
              {STATS.map(s => (
                <div className="about__stat-card" key={s.lbl}>
                  <span className="about__stat-num">{s.num}</span>
                  <span className="about__stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-serif" style={{ marginBottom: 24 }}>
              More Than a Salon,<br /><em>It's an Experience</em>
            </h2>

            <blockquote className="about__quote">
              "We don't just cut hair — we craft confidence, one client at a time."
            </blockquote>

            <p className="about__text">
              Welcome to <strong>Arshi Unisex Saloon &amp; SPA</strong> — where luxury meets
              artistry. Founded over a decade ago by Arshi Khan, we have grown into one of
              Hyderabad's most trusted names in premium grooming and wellness.
            </p>
            <p className="about__text">
              Our team of certified professionals is passionate about delivering
              personalized experiences that enhance your natural beauty. We use only the
              finest, skin-safe products and stay ahead of global trends to bring you
              salon-quality results every single visit.
            </p>
            <p className="about__text">
              Whether you're here for a quick trim, a bridal transformation, or a full
              spa day — we promise to make every moment at Arshi truly unforgettable.
            </p>

            <div className="about__values">
              {VALUES.map(v => (
                <div className="about__value" key={v.title}>
                  <div className="about__value-icon">{v.icon}</div>
                  <div>
                    <div className="about__value-title">{v.title}</div>
                    <div className="about__value-text">{v.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-dark" onClick={onBookClick}>
              <i className="fas fa-calendar-check" />
              Book an Appointment
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* ═══════════════════ MISSION & VISION ═══════════════════ */}
    <div className="about__mv">
      <div className="container">
        <div className="about__mv-grid">
          <div className="about__mv-card about__mv-card--dark">
            <div className="about__mv-card__blob" />
            <span className="about__mv-label">Our Purpose</span>
            <h3 className="about__mv-title">Mission</h3>
            <p className="about__mv-text">
              To provide every client with a luxurious, personalized beauty experience
              that enhances their natural beauty and leaves them feeling confident,
              refreshed, and ready to conquer the world.
            </p>
          </div>
          <div className="about__mv-card about__mv-card--gold">
            <div className="about__mv-card__blob" />
            <span className="about__mv-label">Our Dream</span>
            <h3 className="about__mv-title">Vision</h3>
            <p className="about__mv-text">
              To be Hyderabad's most loved and respected salon — a space where artistry,
              wellness, and warmth come together to create meaningful transformations
              that go beyond the mirror.
            </p>
          </div>
        </div>
      </div>
    </div>


    {/* ═══════════════════ TEAM ═══════════════════ */}
    <div className="about__team">
      <div className="container">
        <div className="about__team-header">
          <span className="eyebrow">The Experts</span>
          <h2 className="heading-serif" style={{ marginTop: 8, marginBottom: 12 }}>
            Meet Our <em>Team</em>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 440, margin: '0 auto' }}>
            Passionate professionals dedicated to making you look and feel your absolute best.
          </p>
        </div>

        <div className="about__team-grid">
  {TEAM.map((member, index) => (
    <div className="team-card" key={member.name}>
      
      <div className="team-card__avatar">
        <img
          src={`/avatar-${index + 1}.png`}
          alt={member.name}
          className="team-card__img"
        />
      </div>

      <div className="team-card__name">{member.name}</div>
      <div className="team-card__role">{member.role}</div>
      <div className="team-card__spec">{member.spec}</div>

      <span className="team-card__badge">
        {member.exp} Experience
      </span>

    </div>
  ))}
</div>
      </div>
    </div>

    {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
    <div style={{ background: 'var(--dark)', padding: '72px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="heading-serif" style={{ color: '#fff', marginBottom: 12 }}>
          Experience the <em>Arshi</em> Difference
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 32 }}>
          Book your appointment and let our experts take care of the rest.
        </p>
        <button className="btn btn-gold" onClick={onBookClick}>
          <i className="fas fa-calendar-check" />
          Book an Appointment
        </button>
      </div>
    </div>

  </div>
);

export default About;
