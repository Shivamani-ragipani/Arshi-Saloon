import React, { useState } from 'react';
import '../styles/gallery.css';

const ITEMS = [
  { id:1,  cls:'gallery__item--hero', img:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=80',  label:'Expert Hair Styling',      sub:'Hair Services'     },
  { id:2,  cls:'gallery__item--tall', img:'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', label:'Luxe Nail Art',          sub:'Nail Studio'       },
  { id:3,  cls:'',                    img:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', label:'Premium Facials',        sub:'Skin Care'         },
  { id:4,  cls:'gallery__item--wide', img:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80', label:'Beard Artistry',        sub:"Men's Grooming"    },
  { id:5,  cls:'',                    img:'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', label:'Bridal Transformations', sub:'Makeup Studio'     },
  { id:6,  cls:'',                    img:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', label:'Spa & Relaxation',       sub:'Wellness'          },
  { id:7,  cls:'gallery__item--wide', img:'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80', label:'Color & Highlights',    sub:'Hair Coloring'     },
  { id:8,  cls:'',                    img:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80', label:'Luxury Ambiance',       sub:'Our Space'         },
];

const Gallery = ({ onBookClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__watermark">GALLERY</div>

      <div className="container">
        <div className="gallery__header">
          <span className="eyebrow" style={{ background:'rgba(201,168,76,0.12)', color:'#E8D5A3' }}>
            Our Work
          </span>
          <h2 className="heading-serif" style={{ color:'#fff', marginTop:8, marginBottom:12 }}>
            Crafting <em>Moments</em> of Beauty
          </h2>
          <p>
            Each transformation is a story — browse our portfolio of artistry and elegance.
          </p>
        </div>

        <div className="gallery__grid">
          {ITEMS.map(item => (
            <div
              key={item.id}
              className={`gallery__item ${item.cls}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={onBookClick}
            >
              <img src={item.img} alt={item.label} loading="lazy" />
              <div className="gallery__item-overlay">
                <div>
                  <div className="gallery__item-label">{item.label}</div>
                  <div className="gallery__item-sub">{item.sub}</div>
                </div>
              </div>
              <div className="gallery__item-zoom">
                <i className="fas fa-expand-alt" />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__footer">
          <span className="gallery__footer-txt">Follow our work on Instagram</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-gold"
            style={{ fontSize: 12 }}
          >
            <i className="fab fa-instagram" />
            @ArshiSaloon
          </a>
          <button className="btn btn-gold" onClick={onBookClick} style={{ fontSize: 12 }}>
            <i className="fas fa-calendar-check" />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
