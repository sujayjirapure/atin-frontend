import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
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

  return (
    <>
      {toast && <div className="toast">{toast}</div>}

      {/* NAVBAR */}
      <header className="navbar">
        <img
          src="https://dummyimage.com/150x45/0a3d62/ffffff&text=ATIPN"
          alt="ATIPN Logo"
        />
        <nav>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>High-Speed Fiber Internet in Akola</h1>
          <p>
            Trusted by 500+ customers • Reliable • Affordable • 24×7 Support
          </p>
          <a href="#contact" className="cta">Get New Connection</a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Internet Network"
        />
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        <div>500+ Customers</div>
        <div>99.9% Uptime</div>
        <div>Local Support</div>
        <div>Fiber Network</div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">Home Broadband</div>
          <div className="card">Business Internet</div>
          <div className="card">Dedicated Leased Line</div>
          <div className="card">Fiber Connectivity</div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="plans">
        <h2>Popular Plans</h2>
        <div className="grid">
          <div className="price">
            <h3>40 Mbps</h3>
            <p>₹499 / month</p>
          </div>
          <div className="price highlight">
            <h3>100 Mbps</h3>
            <p>₹799 / month</p>
          </div>
          <div className="price">
            <h3>200 Mbps</h3>
            <p>₹1299 / month</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Akola Telecom</h2>
        <p>
          Akola Telecom & IP Networks Pvt Ltd is a trusted Internet Service
          Provider in Akola, delivering high-speed fiber broadband and enterprise
          connectivity with dedicated local support.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

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

        <iframe
          title="Akola Office Location"
          src="https://www.google.com/maps?q=Akola%20444001&output=embed"
        />
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Akola Telecom & IP Networks Pvt Ltd<br />
          T-13, 3rd Floor, Dariyav Height, MG Road, Akola – 444001
        </p>
      </footer>

      {/* WHATSAPP */}
      <a
        className="whatsapp"
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </>
  );
}
