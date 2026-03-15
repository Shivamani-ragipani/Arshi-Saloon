import React, { useState } from 'react';
import '../styles/booking.css';

/* ── Data ── */
const SERVICE_GROUPS = [
  {
    label: 'Hair Services',
    options: ['Haircut (Women)','Haircut (Men)','Kids Haircut','Hair Styling','Hair Coloring','Hair Smoothening','Hair Rebonding','Hair Treatment'],
  },
  {
    label: 'Beauty Services',
    options: ['Classic Facial','Gold Facial','Eyebrow Threading','Full Face Threading','Arms Waxing','Legs Waxing','Full Body Wax','Party Makeup'],
  },
  {
    label: 'Spa Treatments',
    options: ['Head Massage','Swedish Body Massage','Deep Tissue Massage','Hair Spa','Skin Treatment','Manicure','Pedicure','Foot Massage'],
  },
  {
    label: "Men's Grooming",
    options: ['Haircut & Styling','Beard Styling','Clean Shave','Hair Color (Men)',"Men's Facial",'D-Tan Pack','Grooming Package'],
  },
  {
    label: 'Bridal Packages',
    options: ['Bridal Makeup','Pre-Bridal Package','Bridal Mehendi','Groom Package','Party Makeup','Saree Draping','Full Bridal Package'],
  },
];

const TIME_SLOTS = [
  '9:00 AM','9:30 AM','10:00 AM','10:30 AM',
  '11:00 AM','11:30 AM','12:00 PM','12:30 PM',
  '1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '3:00 PM','3:30 PM','4:00 PM','4:30 PM',
  '5:00 PM','5:30 PM','6:00 PM','6:30 PM',
  '7:00 PM','7:30 PM',
];

const STEPS = ['Personal Details', 'Choose Service', 'Date & Time', 'Confirm'];

/* ── WhatsApp message formatter ── */
const buildWhatsAppMessage = (form) => {
  const lines = [
    '🌸 *NEW APPOINTMENT REQUEST*',
    '━━━━━━━━━━━━━━━━━━━━',
    `👤 *Name:*    ${form.name}`,
    `📱 *Phone:*   ${form.phone}`,
    form.email ? `📧 *Email:*   ${form.email}` : null,
    `✂️ *Service:* ${form.service}`,
    `📅 *Date:*    ${form.date}`,
    `⏰ *Time:*    ${form.time}`,
    form.notes ? `📝 *Notes:*   ${form.notes}` : null,
    '━━━━━━━━━━━━━━━━━━━━',
    '_Sent via Arshi Salon website booking form_',
  ].filter(Boolean);
  return lines.join('\n');
};

/* ── Component ── */
const Booking = ({ onClose }) => {
  const [step,      setStep]  = useState(0);
  const [submitted, setSub]   = useState(false);
  const [form, setForm]       = useState({
    name:'', phone:'', email:'',
    serviceGroup:'', service:'',
    date:'', time:'', notes:'',
  });

  const update = (key, val) => setForm(p => ({ ...p, [key]: val }));

  const today = new Date().toISOString().split('T')[0];

  const canNext = () => {
    if (step === 0) return form.name.trim() && form.phone.trim();
    if (step === 1) return !!form.service;
    if (step === 2) return !!form.date && !!form.time;
    return true;
  };

  const selectedGroup = SERVICE_GROUPS.find(g => g.label === form.serviceGroup);

  const handleConfirm = () => {
    /* Open WhatsApp with pre-filled professional message */
    const msg   = buildWhatsAppMessage(form);
    const phone = '919966360611';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    setSub(true);
  };

  const handleReset = () => {
    setSub(false);
    setStep(0);
    setForm({ name:'', phone:'', email:'', serviceGroup:'', service:'', date:'', time:'', notes:'' });
  };

  return (
    <div className="booking">

      {/* Hero */}
      <div className="booking__hero">
        <div className="booking__hero-dots" />
        <div className="booking__hero-blob" />
        <div className="container">
          <div className="booking__hero-inner">
            <span className="eyebrow" style={{ background:'rgba(201,168,76,0.12)', color:'#E8D5A3' }}>
              Reserve Your Spot
            </span>
            <h1 className="heading-serif" style={{ color:'#fff', marginTop:10, marginBottom:12 }}>
              Book <em>Appointment</em>
            </h1>
            <p>Choose your service and secure your slot in just a few steps.</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="booking__main">

        {submitted ? (
          /* ── SUCCESS STATE ── */
          <div className="booking__success">
            <div className="booking__success-icon">
              <i className="fas fa-check" />
            </div>
            <h2 className="booking__success-title">Booking Request Sent!</h2>
            <p className="booking__success-sub">
              Thank you, <strong>{form.name}</strong>! Your request has been sent to our team
              via WhatsApp. We'll confirm your appointment within 2 hours.
            </p>

            <div className="booking__success-summary">
              {[
                { lbl:'Name',    val: form.name    },
                { lbl:'Phone',   val: form.phone   },
                { lbl:'Service', val: form.service },
                { lbl:'Date',    val: form.date    },
                { lbl:'Time',    val: form.time    },
              ].map(r => (
                <div className="booking__success-row" key={r.lbl}>
                  <span>{r.lbl}</span>
                  <span>{r.val}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919966360611?text=${encodeURIComponent(buildWhatsAppMessage(form))}`}
              target="_blank" rel="noreferrer"
              className="booking__success-wa"
            >
              <i className="fab fa-whatsapp" />
              Open WhatsApp to Confirm
            </a>

            <div style={{ marginTop:20 }}>
              <button
                className="btn btn-outline-gold"
                style={{ fontSize:12 }}
                onClick={handleReset}
              >
                Book Another Appointment
              </button>
            </div>
          </div>

        ) : (
          <>
            {/* ── STEP INDICATOR ── */}
            <div className="booking__steps">
              {STEPS.map((label, i) => {
                const state = i < step ? 'done' : i === step ? 'active' : 'todo';
                return (
                  <React.Fragment key={label}>
                    <div className={`booking__step booking__step--${state}`}>
                      <div className="booking__step-node">
                        <div className="booking__step-circle">
                          {state === 'done'
                            ? <i className="fas fa-check" style={{ fontSize:11 }} />
                            : i + 1
                          }
                        </div>
                        <span className="booking__step-label">{label}</span>
                      </div>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`booking__step-line booking__step-line--${state === 'done' ? 'done' : 'todo'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* ── CARD ── */}
            <div className="booking__card">
              <div className="booking__card-head">
                <div className="booking__card-title">{STEPS[step]}</div>
                <div className="booking__card-sub">
                  {step === 0 && 'Tell us who you are so we can reach you.'}
                  {step === 1 && 'What would you like us to do for you today?'}
                  {step === 2 && 'When would you like to come in?'}
                  {step === 3 && 'Review your booking details before confirming.'}
                </div>
              </div>

              <div className="booking__card-body">

                {/* ── STEP 0: Personal Details ── */}
                {step === 0 && (
                  <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                    <div className="booking__field">
                      <label>Full Name *</label>
                      <div className="booking__field-icon-wrap">
                        <i className="fas fa-user booking__field-icon" />
                        <input
                          className="booking__field-input"
                          type="text" required
                          value={form.name}
                          onChange={e => update('name', e.target.value)}
                          placeholder="Priya Sharma"
                        />
                      </div>
                    </div>
                    <div className="booking__field">
                      <label>Phone Number *</label>
                      <div className="booking__field-icon-wrap">
                        <i className="fas fa-phone booking__field-icon" />
                        <input
                          className="booking__field-input"
                          type="tel" required
                          value={form.phone}
                          onChange={e => update('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div className="booking__field">
                      <label>Email Address (Optional)</label>
                      <div className="booking__field-icon-wrap">
                        <i className="fas fa-envelope booking__field-icon" />
                        <input
                          className="booking__field-input"
                          type="email"
                          value={form.email}
                          onChange={e => update('email', e.target.value)}
                          placeholder="priya@example.com"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 1: Choose Service ── */}
                {step === 1 && (
                  <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                    <div className="booking__field">
                      <label style={{ marginBottom:10 }}>Service Category *</label>
                      <div className="booking__cat-grid">
                        {SERVICE_GROUPS.map(g => (
                          <button
                            key={g.label}
                            className={`booking__cat-btn ${form.serviceGroup === g.label ? 'booking__cat-btn--active' : ''}`}
                            onClick={() => { update('serviceGroup', g.label); update('service',''); }}
                          >
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedGroup && (
                      <div className="booking__field">
                        <label style={{ marginBottom:10 }}>Specific Service *</label>
                        <div className="booking__service-grid">
                          {selectedGroup.options.map(opt => (
                            <button
                              key={opt}
                              className={`booking__service-btn ${form.service === opt ? 'booking__service-btn--active' : ''}`}
                              onClick={() => update('service', opt)}
                            >
                              <i className="fas fa-cut" />
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 2: Date & Time ── */}
                {step === 2 && (
                  <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                    <div className="booking__field">
                      <label>Preferred Date *</label>
                      <div className="booking__field-icon-wrap">
                        <i className="fas fa-calendar booking__field-icon" />
                        <input
                          className="booking__field-input"
                          type="date" required
                          min={today}
                          value={form.date}
                          onChange={e => update('date', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="booking__field">
                      <label style={{ marginBottom:10 }}>Preferred Time *</label>
                      <div className="booking__time-grid">
                        {TIME_SLOTS.map(slot => (
                          <button
                            key={slot}
                            className={`booking__time-btn ${form.time === slot ? 'booking__time-btn--active' : ''}`}
                            onClick={() => update('time', slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="booking__field">
                      <label>Special Notes (Optional)</label>
                      <div className="booking__field-icon-wrap">
                        <i className="fas fa-sticky-note booking__field-icon" style={{ top:18, transform:'none' }} />
                        <textarea
                          className="booking__field-input booking__field-input--bare"
                          style={{ paddingLeft:40, resize:'vertical', minHeight:90 }}
                          rows="3"
                          value={form.notes}
                          onChange={e => update('notes', e.target.value)}
                          placeholder="Any special requests or things we should know..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Confirm ── */}
                {step === 3 && (
                  <div>
                    <div className="booking__summary">
                      {[
                        { icon:'fa-user',     lbl:'Name',    val: form.name    },
                        { icon:'fa-phone',    lbl:'Phone',   val: form.phone   },
                        { icon:'fa-cut',      lbl:'Service', val: form.service },
                        { icon:'fa-calendar', lbl:'Date',    val: form.date    },
                        { icon:'fa-clock',    lbl:'Time',    val: form.time    },
                      ].map(r => (
                        <div className="booking__summary-row" key={r.lbl}>
                          <i className={`fas ${r.icon}`} />
                          <span className="booking__summary-label">{r.lbl}</span>
                          <span className="booking__summary-value">{r.val}</span>
                        </div>
                      ))}
                      {form.notes && (
                        <div className="booking__summary-notes">{form.notes}</div>
                      )}
                    </div>

                    <p className="booking__confirm-note">
                      Clicking <strong>"Confirm Booking"</strong> will open WhatsApp with your
                      booking details pre-filled and send them directly to our team at{' '}
                      <strong>+91 99663 60611</strong>.
                    </p>

                    <div style={{
                      display:'flex', alignItems:'center', gap:10,
                      padding:'14px 18px',
                      background:'rgba(37,211,102,0.08)',
                      borderRadius:'var(--radius)', border:'1px solid rgba(37,211,102,0.2)',
                      marginTop:16,
                    }}>
                      <i className="fab fa-whatsapp" style={{ color:'#25D366', fontSize:20 }} />
                      <span style={{ fontSize:12, color:'var(--muted)' }}>
                        Your booking will be sent via WhatsApp to our salon team for instant confirmation.
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* ── Navigation ── */}
              <div className="booking__card-foot">
                <button
                  className="booking__btn-back"
                  onClick={() => setStep(s => s - 1)}
                  disabled={step === 0}
                >
                  <i className="fas fa-arrow-left" style={{ marginRight:6, fontSize:10 }} />
                  Back
                </button>

                {step < STEPS.length - 1 ? (
                  <button
                    className="booking__btn-next"
                    onClick={() => setStep(s => s + 1)}
                    disabled={!canNext()}
                  >
                    Continue
                    <i className="fas fa-arrow-right" style={{ fontSize:10 }} />
                  </button>
                ) : (
                  <button
                    className="booking__btn-next"
                    style={{ background:'#25D366', borderColor:'#25D366' }}
                    onClick={handleConfirm}
                  >
                    <i className="fab fa-whatsapp" />
                    Confirm via WhatsApp
                  </button>
                )}
              </div>
            </div>

            {/* Alt contact */}
            <p className="booking__alt-contact">
              Prefer to call?{' '}
              <a href="tel:+919966360611">+91 99663 60611</a>
              {' '}or{' '}
              <a
                href="https://wa.me/919966360611"
                target="_blank" rel="noreferrer"
              >
                WhatsApp us directly
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
