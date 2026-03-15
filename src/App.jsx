import React, { useState, useEffect, useCallback } from 'react';
import './styles/global.css';
import Navbar  from './components/Navbar';
import Home    from './pages/Home';
import Footer  from './components/Footer';
import Booking from './components/Booking';
import './styles/booking.css';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking  = useCallback(() => setBookingOpen(true),  []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  /* Close on ESC */
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') closeBooking(); };
    if (bookingOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [bookingOpen, closeBooking]);

  /* Lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = bookingOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [bookingOpen]);

  return (
    <div className="App">
      <Navbar onBookClick={openBooking} />
      <Home   onBookClick={openBooking} />
      <Footer onBookClick={openBooking} />

      {/* ── Booking Modal ── */}
      {bookingOpen && (
        <div
          className="booking-modal-overlay"
          onClick={e => { if (e.target === e.currentTarget) closeBooking(); }}
        >
          <div className="booking-modal-inner">
            <button
              className="booking-modal-close"
              onClick={closeBooking}
              aria-label="Close booking"
            >
              <i className="fas fa-times" />
            </button>
            <Booking onClose={closeBooking} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
