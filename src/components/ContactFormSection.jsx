import React, { useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const ContactFormSection = () => {
  useEffect(() => {
    document.querySelector(".contact-card")?.classList.add("animate-in");
  }, []);

  return (
    <>
      <section className="contact-section">
        {/* MAP (NON INTERACTIVE) */}
        <iframe
          className="contact-map"
          title="Office Location"
          loading="lazy"
          src="https://www.google.com/maps?q=716-717,+Tower+4,+Sector+135,+Noida,+Uttar+Pradesh+201304&output=embed"
        />

        {/* CONTENT */}
        <div className="contact-card">
          <h2>Contact Our Global Team</h2>
          <p className="subtitle">
            Let’s discuss how we can support your business with reliable tech solutions.
          </p>

          <div className="contact-grid">
            {/* FORM */}
            <form className="contact-form">
              <div className="grid-2">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="grid-2">
                <input type="text" placeholder="Country" />
                <select>
                  <option>Select Service</option>
                  <option>Managed IT Services</option>
                  <option>Network Support & Security</option>
                  <option>IT Infrastructure Setup</option>
                  <option>Remote & On-site Support</option>
                  <option>System Monitoring & Maintenance</option>
                </select>
              </div>

              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>

            {/* INFO */}
            <div className="contact-info">
              <div className="info-item">
                <FiMail />
                <div>
                  <span>Email</span>
                  <p>support@technosky.com</p>
                </div>
              </div>

              <div className="info-item">
                <FiPhone />
                <div>
                  <span>Phone</span>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item">
                <FiMapPin />
                <div>
                  <span>Office Address</span>
                  <p>
                    716-717, Tower 4, ABC <br />
                    Sector-135, Noida <br />
                    Uttar Pradesh – 201304
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FiClock />
                <div>
                  <span>Support Hours</span>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="socials">
                <FiFacebook />
                <FiTwitter />
                <FiLinkedin />
                <FiInstagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style>{`
        .contact-section {
          position: relative;
          min-height: 100vh;
          background: #05070d;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .contact-map {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%) brightness(0.6);
          pointer-events: none;
        }

        .contact-card {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          background: linear-gradient(135deg, #0b1d34, #142a45);
          border-radius: 20px;
          padding: 60px;
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }

        .contact-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          color: #fff;
          font-size: 40px;
          margin-bottom: 10px;
          text-align: center;
        }

        .subtitle {
          color: #b6c7df;
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
        }

        .contact-form input,
        .contact-form textarea,
        .contact-form select {
          width: 100%;
          padding: 16px;
          background: #425b73;
          border: none;
          border-radius: 6px;
          color: #fff;
          margin-bottom: 18px;
        }

        .contact-form textarea {
          min-height: 140px;
          resize: none;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        button {
          background: linear-gradient(135deg, #2d9cff, #1d6cff);
          color: #fff;
          padding: 16px;
          border-radius: 6px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .info-item {
          display: flex;
          gap: 15px;
          color: #cfd6ea;
          align-items: flex-start;
        }

        .info-item svg {
          color: #2d9cff;
          font-size: 20px;
          margin-top: 4px;
        }

        .info-item span {
          font-weight: 600;
          color: #fff;
          display: block;
        }

        .socials {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .socials svg {
          font-size: 20px;
          color: #cfd6ea;
          cursor: pointer;
          transition: 0.3s;
        }

        .socials svg:hover {
          color: #2d9cff;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 40px 25px;
          }

          h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactFormSection;
