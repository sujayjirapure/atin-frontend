import React, { useState, useEffect } from "react";
import heroImg from "./img1.jpg";

import "./App.css";

const API_URL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://atipn-backend.onrender.com";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  /* ================= FORMS (UNCHANGED) ================= */
  const submitInquiry = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value,
    };

    try {
      const res = await fetch(`${API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const r = await res.json();
      r.success ? notify("Inquiry sent successfully") : notify("Failed");
      e.target.reset();
    } catch {
      notify("Server error");
    }
    setLoading(false);
  };

  const submitComplaint = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      customerId: e.target.customerId.value,
      issue: e.target.issue.value,
    };

    try {
      const res = await fetch(`${API_URL}/api/complaint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const r = await res.json();
      r.success ? notify("Complaint submitted") : notify("Failed");
      e.target.reset();
    } catch {
      notify("Server error");
    }
    setLoading(false);
  };

  /* ================= BOILER REVEAL EFFECT ================= */
  useEffect(() => {
    const els = document.querySelectorAll(".bo-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
  }, []);

  return (
    <>
      {toast && <div className="toast">{toast}</div>}
      <header className="site-header">
  <div className="bo-container header-inner">
    <div className="logo">
      <img
        src=""  
        alt="ATIN Logo"
        height="42"
      />
    </div>

    <nav className="header-nav">
      <a href="#services">Services</a>
      <a href="#features">Features</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" className="header-btn">
      Submit Inquiry
    </a>
  </div>
</header>


      {/* HERO SECTION */}
<section className="hero-modern">
  <div className="hero-modern-wrap">

    {/* LEFT CONTENT */}
    <div className="hero-modern-content">
      <span className="hero-pill">High-Speed Fiber Internet</span>

      <h1>
        Reliable Broadband<br />in <span>Akola</span>
      </h1>

      <p className="hero-sub">
        Trusted by 500+ customers • Reliable • Affordable • 24×7 Support
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">
          Get New Connection
        </a>
        <a href="#contact" className="btn-secondary">
          Raise Complaint
        </a>
      </div>

      <div className="hero-stats">
        <div>
          <strong>500+</strong>
          <span>Customers</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Uptime</span>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hero-modern-image">
      <img src={heroImg} alt="Fiber Network" />
    </div>

  </div>
</section>




      {/* ================= SERVICES (Boiler cards → ATIN services) ================= */}
      <section className="bo-types" id="services">
        <div className="bo-container">
          <div className="bo-types-head">
            <div>
              <div className="bo-types-kicker">Our Services</div>
              <h2 className="bo-types-title">Internet Services We Offer</h2>
            </div>
            <p className="bo-types-sub">
              Reliable broadband and enterprise connectivity for homes and businesses in Akola.
            </p>
          </div>

          <div className="bo-types-grid">
            {[
              "Home Broadband",
              "Business Internet",
              "Dedicated Leased Line",
              "Fiber Connectivity",
              "Enterprise Networking",
              "Local Technical Support",
            ].map((s) => (
              <article className="bo-type-card bo-reveal" key={s}>
                <h3 className="bo-type-title">{s}</h3>
                <p className="bo-type-text">
                  High-performance and stable internet service backed by local support.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLANS (Boiler timeline → ATIN plans) ================= */}
      <section className="workflow-section" id="plans">
  <div className="bo-container">

    <div className="workflow-header bo-reveal">
      <p className="workflow-eyebrow">How we work</p>
      <h2 className="workflow-title">Internet Service Workflow</h2>
      <p className="workflow-sub">
        From requirement assessment to installation and ongoing support —
        ensuring fast, reliable and secure internet connectivity.
      </p>
    </div>

    <div className="workflow-timeline">

      {[
        {
          step: "01",
          title: "Requirement Assessment",
          desc: "Understanding customer location, usage needs and feasibility for fiber connectivity.",
        },
        {
          step: "02",
          title: "Plan & Speed Selection",
          desc: "Selecting the right broadband plan based on speed, budget and usage.",
        },
        {
          step: "03",
          title: "Installation & Activation",
          desc: "Fiber installation, router setup and connection activation by local technical team.",
        },
        {
          step: "04",
          title: "Support & Maintenance",
          desc: "Ongoing monitoring, issue resolution and dedicated customer support.",
        },
      ].map((item) => (
        <div className="workflow-step bo-reveal" key={item.step}>
          <div className="workflow-badge">{item.step}</div>
          <div className="workflow-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>



      {/* ================= ABOUT ================= */}
      <section className="about-atin">
  <div className="bo-container">
    <div className="about-card bo-reveal">

      <div className="about-accent"></div>

      <div className="about-content">
        <h2>About Akola Telecom & IP Networks Pvt Ltd</h2>

        <p>
          Akola Telecom & IP Networks Pvt Ltd is a trusted Internet Service Provider
          in Akola, delivering high-speed fiber broadband and enterprise connectivity
          with dedicated local support.
        </p>

        <p>
          We focus on reliable uptime, affordable plans and fast local service to
          ensure uninterrupted connectivity for homes and businesses.
        </p>

        <div className="about-stats">
          <div>
            <strong>500+</strong>
            <span>Customers</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>Uptime</span>
          </div>
          <div>
            <strong>24×7</strong>
            <span>Support</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* ================= CONTACT (FORMS UNTOUCHED) ================= */}
      <section id="contact" className="contact-section">
        <div className="bo-container">
          <h2 className="contact-title">Contact Us</h2>

          <div className="forms">
            <form onSubmit={submitInquiry}>
              <h3>New Connection</h3>
              <input name="name" placeholder="Name" required />
              <input name="mobile" placeholder="Mobile" required />
              <textarea name="address" placeholder="Address" required />
              <button disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            <form onSubmit={submitComplaint}>
              <h3>Customer Complaint</h3>
              <input name="customerId" placeholder="Customer ID" required />
              <textarea name="issue" placeholder="Issue" required />
              <button disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="map-section">
  <div className="bo-container">
    <h2 className="map-title">Our Office Location</h2>

    <iframe
      title="Akola Telecom Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.017613182943!2d76.99652100033437!3d20.708794106721605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd731ef157873f1%3A0x89ef9c681712ac03!2sakola%20television%20network%20(ATN)!5e0!3m2!1sen!2sin!4v1766336601565!5m2!1sen!2sin"
      loading="lazy"
      allowFullScreen
    />
  </div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
  <div className="bo-container footer-grid">

    <div className="footer-brand">
      <h2>Connecting Homes, Empowering Businesses</h2>
      {/* <img
        src="https://boiler.ieng.tech/static/images/logo1.png"
        alt="ATIN Logo"
        height="50"
      /> */}
    </div>

    <div className="footer-contact">
      <h4>Get in touch</h4>
      <p>📞 +91 9146034000</p>
      <p>✉️ enquiry.atin@gmail.com</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Akola Telecom & IP Networks Pvt Ltd
  </div>
</footer>


      <a
        className="whatsapp"
        href="https://wa.me/919146034000"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </>
  );
}
