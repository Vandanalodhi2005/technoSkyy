import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT CONTENT */}
          <div className="contact-left animate-left">
            <span className="contact-tag">GET IN TOUCH</span>

            <h2>
              Don't hesitate to contact us for <br /> more information.
            </h2>

            <p className="contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <hr />

            <h3>Follow our social network</h3>
            <p className="contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="social-icons">
              <span><FaFacebookF /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="contact-right">
            <div className="info-card from-left ">
              <FaMapMarkerAlt className="icon" />
              <h4>Head Office</h4>
              <p>
                Jalan Cempaka Wangi No 22 <br />
                Jakarta - Indonesia
              </p>
            </div>

            <div className="info-card from-top">
              <FaEnvelope className="icon" />
              <h4>Email Us</h4>
              <p>
                support@yourdomain.tld <br />
                hello@yourdomain.tld
              </p>
            </div>

            <div className="info-card from-bottom">
              <FaPhoneAlt className="icon" />
              <h4>Call us</h4>
              <p>
                Phone : +6221.2002.2012 <br />
                Fax : +6221.2002.2013
              </p>
            </div>

            <div className="info-card from-right">
              <FaComments className="icon" />
              <h4>Free Consultations</h4>
              <p>
                Phone : +6221.2002.2012 <br />
                Fax : +6221.2002.2013
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CSS (SAME FILE) ===== */}
      <style>{`
        .contact-section {
          background: linear-gradient(135deg, #05070d, #0b1d34);
          padding: 90px 0;
          color: #fff;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        /* ===== LEFT TEXT ANIMATION ===== */
        .animate-left {
          animation: slideLeft 1s ease forwards;
          opacity: 0;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(-60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .contact-tag {
          color: #2d9cff;
          letter-spacing: 2px;
          font-size: 14px;
          margin-bottom: 10px;
          display: inline-block;
        }

        .contact-left h2 {
          font-size: 38px;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .contact-left h3 {
          margin-top: 30px;
          margin-bottom: 10px;
        }

        .contact-desc {
          color: #b6c2d9;
          line-height: 1.7;
          max-width: 500px;
        }

        hr {
          margin: 30px 0;
          border: 0;
          border-top: 1px solid #1f2f46;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .social-icons span {
          width: 42px;
          height: 42px;
          background: #1d5eff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        .social-icons span:hover {
          background: #2d9cff;
          transform: translateY(-4px);
        }

        /* ===== RIGHT CARDS ===== */
        .contact-right {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .info-card {
          background: #142033;
          padding: 30px;
          border-radius: 16px;
          transition: 0.35s ease;
          opacity: 0;
          animation: fadeIn 0.8s ease forwards;
        }

        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(45, 108, 255, 0.25);
        }

        .info-card .icon {
          font-size: 26px;
          margin-bottom: 15px;
          color: #4db5ff;
        }

        .info-card h4 {
          margin-bottom: 10px;
        }

        .info-card p {
          color: #c7d4ec;
          line-height: 1.6;
        }

        /* ===== CARD DIRECTIONS ===== */
        .from-left {
          animation: fromLeft 0.9s ease forwards;
        }

        .from-top {
          animation: fromTop 0.9s ease forwards;
          animation-delay: 0.15s;
        }

        .from-bottom {
          animation: fromBottom 0.9s ease forwards;
          animation-delay: 0.3s;
        }

        .from-right {
          animation: fromRight 0.9s ease forwards;
          animation-delay: 0.45s;
        }

        @keyframes fromLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fromRight {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fromTop {
          from { transform: translateY(-60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fromBottom {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-right {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;
