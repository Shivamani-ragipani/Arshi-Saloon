import React from 'react';
import '../styles/testimonials.css';

const TESTIMONIALS = [
  { id:1,  name:'Priya Sharma',   loc:'Hyderabad',    rating:5, service:'Hair Coloring',    text:"The best salon experience I've ever had! My hair has never looked this healthy and shiny. The stylists really listen to what you want." },
  { id:2,  name:'Rahul Mehta',    loc:'Secunderabad', rating:5, service:"Men's Grooming",   text:"Absolutely love the men's haircut and beard styling service. Professional, clean, and the staff is so friendly." },
  { id:3,  name:'Ananya Reddy',   loc:'Banjara Hills',rating:5, service:'Luxury Facial',    text:"The facial treatment left my skin glowing! Premium products and a super relaxing atmosphere. Will definitely be back." },
  { id:4,  name:'Kavitha Singh',  loc:'Jubilee Hills', rating:5, service:'Bridal Makeup',   text:"I got my bridal makeup done here and I looked absolutely stunning. The team went above and beyond for my big day." },
  { id:5,  name:'Deepak Kumar',   loc:'Madhapur',     rating:5, service:'Spa Package',      text:"The head massage and hair spa combo is pure bliss. I come every month now. Worth every rupee." },
  { id:6,  name:'Meera Patel',    loc:'Kukatpally',   rating:5, service:'Hair Smoothening', text:"Hair smoothening done to perfection! My frizzy hair is now silky smooth. Amazing results that last." },
  { id:7,  name:'Sanjay Verma',   loc:'Gachibowli',   rating:5, service:'Hair Treatment',   text:"Clean, hygienic salon with excellent service. The staff is knowledgeable and suggests the best treatments for you." },
  { id:8,  name:'Lakshmi Nair',   loc:'Kondapur',     rating:5, service:'Beauty Services',  text:"Threading and waxing done with expert precision. Very comfortable and the results are always flawless." },
  { id:9,  name:'Vikram Rao',     loc:'Hitech City',  rating:5, service:'Hair Coloring',    text:"Came in for a hair color and walked out feeling like a new person. The colorist's expertise is unmatched." },
];

const TRUST = [
  { icon:'fa-users',          num:'5,000+',  lbl:'Happy Clients'   },
  { icon:'fa-star',           num:'4.9/5',   lbl:'Average Rating'  },
  { icon:'fa-calendar-check', num:'15,000+', lbl:'Appointments'    },
  { icon:'fa-award',          num:'12+',     lbl:'Years of Trust'  },
];

const TCard = ({ t }) => (
  <div className="t-card">
    <div className="t-card__stars">
      {Array.from({ length: t.rating }).map((_, i) => (
        <i key={i} className="fas fa-star" />
      ))}
    </div>
    <p className="t-card__text">"{t.text}"</p>
    <div className="t-card__footer">
      <div>
        <div className="t-card__name">{t.name}</div>
        <div className="t-card__loc">{t.loc}</div>
      </div>
      <span className="t-card__badge">{t.service}</span>
    </div>
  </div>
);

const col1 = [TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[6]];
const col2 = [TESTIMONIALS[1], TESTIMONIALS[4], TESTIMONIALS[7]];
const col3 = [TESTIMONIALS[2], TESTIMONIALS[5], TESTIMONIALS[8]];

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <div className="container">

      <div className="testimonials__header">
        <span className="eyebrow">Client Love</span>
        <h2 className="heading-serif" style={{ marginTop: 8, marginBottom: 10 }}>
          What Our <em>Clients Say</em>
        </h2>
        <p>Real stories from real clients who trust us with their beauty and wellness journey.</p>
      </div>

      {/* 3-column auto-scroll */}
      <div className="testimonials__columns">
        <div className="testimonials__col testimonials__col--down">
          <div className="testimonials__col-track">
            {[...col1, ...col1].map((t, i) => <TCard key={`c1-${i}`} t={t} />)}
          </div>
        </div>
        <div className="testimonials__col testimonials__col--up">
          <div className="testimonials__col-track">
            {[...col2, ...col2].map((t, i) => <TCard key={`c2-${i}`} t={t} />)}
          </div>
        </div>
        <div className="testimonials__col testimonials__col--down">
          <div className="testimonials__col-track">
            {[...col3, ...col3].map((t, i) => <TCard key={`c3-${i}`} t={t} />)}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="testimonials__trust">
        {TRUST.map(item => (
          <div className="testimonials__trust-item" key={item.lbl}>
            <div className="testimonials__trust-icon">
              <i className={`fas ${item.icon}`} />
            </div>
            <div>
              <span className="testimonials__trust-num">{item.num}</span>
              <span className="testimonials__trust-lbl">{item.lbl}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
