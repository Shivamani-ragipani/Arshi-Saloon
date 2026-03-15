import React from "react";
import "../styles/contact.css";

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

const Contact = ({ onBookClick }) => {

  const phone = process.env.REACT_APP_PHONE_NUMBER || "+91 93476 5004";
  const phoneLink = phone.replace("+", "");

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* HEADER */}
        <div className="contact__header">
          <span className="eyebrow">Get In Touch</span>

          <h2 className="heading-serif">
            Visit <em>Arshi Unisex Salon</em>
          </h2>

          <p className="contact__desc">
            Walk in anytime or reserve your slot in advance. Our professional
            stylists are ready to give you a premium salon experience.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="contact__cards">

          {/* CALL */}
          <a href={`tel:${phoneLink}`} className="contact__card">
            <div className="contact__icon">
              <i className="fas fa-phone-alt"></i>
            </div>

            <div>
              <h4>Call Us</h4>
              <p>{phone}</p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${phoneLink}`}
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            <div className="contact__icon contact__icon--whatsapp">
              <i className="fab fa-whatsapp"></i>
            </div>

            <div>
              <h4>WhatsApp</h4>
              <p>Chat with our team instantly</p>
            </div>
          </a>

          {/* ADDRESS */}
          <a
            href="https://maps.google.com/?q=Chaitanya+Puri+Hyderabad"
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            <div className="contact__icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <div>
              <h4>Visit Us</h4>
              <p>
                Sai Sri Nivas, 2nd Floor <br />
                Near KNM Smile Dental Hospital <br />
                Chaitanya Puri, Hyderabad
              </p>
            </div>
          </a>

        </div>

        {/* GOOGLE MAP */}
        <div className="contact__map">
          <iframe
            title="Salon Location"
            src="https://maps.google.com/maps?q=Chaitanya%20Puri%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>

        {/* OPENING HOURS */}
        <div className="contact__hours">

          <h3 className="contact__hours-title">
            <i className="fas fa-clock"></i>
            Opening Hours
          </h3>

          {HOURS.map((h) => (
            <div className="contact__hours-row" key={h.day}>
              <span>{h.day}</span>
              <span>{h.time}</span>
            </div>
          ))}

        </div>

        {/* BOOK APPOINTMENT CTA */}
        <div className="contact__cta">

          <h3>Ready for your makeover?</h3>

          <p>
            Reserve your appointment in just a few clicks with our quick
            booking system.
          </p>

          <button className="btn btn-dark" onClick={onBookClick}>
            <i className="fas fa-calendar-check"></i>
            Book Appointment
          </button>

        </div>

      </div>
    </section>
  );
};

export default Contact;