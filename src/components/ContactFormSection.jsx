import React, { useEffect } from "react";

const ContactFormSection = () => {
  useEffect(() => {
    const card = document.querySelector(".contact-form-card");
    card.classList.add("animate-in");
  }, []);

  return (
    <>
      <section className="contact-map-section">
        {/* MAP */}
        <iframe
          className="map"
          src="https://www.google.com/maps?q=London&output=embed"
          loading="lazy"
          title="map"
        ></iframe>

        {/* FORM CARD */}
        <div className="contact-form-card">
          <h2>Send us a message</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <form className="contact-form">
            <div className="grid-2">
              <div>
                <label>NAME</label>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <label>COMPANY</label>
                <input type="text" placeholder="Company" />
              </div>
            </div>

            <div className="grid-2">
              <div>
                <label>EMAIL</label>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <label>PHONE</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>

            <div>
              <label>SUBJECT</label>
              <input type="text" placeholder="Subject" />
            </div>

            <div>
              <label>MESSAGE</label>
              <textarea placeholder="Message"></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
        .contact-map-section {
          position: relative;
          height: 100vh;
          background: #05070d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%) brightness(0.8);
        }

        .contact-form-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          background: linear-gradient(135deg, #0b1d34, #142a45);
          padding: 60px;
          border-radius: 20px;
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .contact-form-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-form-card h2 {
          color: #fff;
          font-size: 42px;
          margin-bottom: 10px;
        }

        .contact-form-card p {
          color: #b6c7df;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .contact-form {
          text-align: left;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        label {
          display: block;
          font-size: 13px;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        input,
        textarea {
          width: 100%;
          background: #425b73;
          border: none;
          padding: 16px 18px;
          border-radius: 6px;
          color: #fff;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }

        textarea {
          min-height: 140px;
          resize: none;
        }

        input::placeholder,
        textarea::placeholder {
          color: #c4d2e4;
        }

        input:focus,
        textarea:focus {
          background: #4d6b89;
          box-shadow: 0 0 0 2px #2d9cff;
        }

        button {
          margin-top: 30px;
          background: linear-gradient(135deg, #2d9cff, #1d6cff);
          color: #fff;
          width: 100%;
          border: none;
          padding: 16px 38px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(45,156,255,0.5);
        }

        @media (max-width: 900px) {
          .contact-form-card {
            padding: 40px 25px;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }

          .contact-form-card h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactFormSection;
