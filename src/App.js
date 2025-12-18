import React, { useState } from "react";
import "./App.css";

const BACKEND_URL = "https://atipn-backend.onrender.com";

function App() {
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [complaintMsg, setComplaintMsg] = useState("");

  const handleInquiry = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value,
    };

    const res = await fetch(`${BACKEND_URL}/api/inquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setInquiryMsg(result.success ? "Inquiry submitted successfully" : "Error");
    e.target.reset();
  };

  const handleComplaint = async (e) => {
    e.preventDefault();

    const data = {
      customerId: e.target.customerId.value,
      issue: e.target.issue.value,
    };

    const res = await fetch(`${BACKEND_URL}/api/complaint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setComplaintMsg(result.success ? "Complaint submitted successfully" : "Error");
    e.target.reset();
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ATIPN</div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Plans</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Fast & Reliable Internet in Akola</h1>
        <p>500+ Customers • Fiber Internet • 24x7 Support</p>
        <a href="#contact" className="btn">Get New Connection</a>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">Home Broadband</div>
          <div className="card">Business Internet</div>
          <div className="card">Fiber Connectivity</div>
        </div>
      </section>

      {/* PLANS */}
      <section className="plans">
        <h2>Popular Plans</h2>
        <div className="plan-cards">
          <div className="plan">40 Mbps – ₹499</div>
          <div className="plan highlight">100 Mbps – ₹799</div>
          <div className="plan">200 Mbps – ₹1299</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <div className="contact-grid">
          {/* INQUIRY FORM */}
          <form className="form" onSubmit={handleInquiry}>
            <h3>New Connection Inquiry</h3>
            <input name="name" placeholder="Name" required />
            <input name="mobile" placeholder="Mobile" required />
            <textarea name="address" placeholder="Address" required />
            <button type="submit">Submit</button>
            <p className="msg">{inquiryMsg}</p>
          </form>

          {/* COMPLAINT FORM */}
          <form className="form" onSubmit={handleComplaint}>
            <h3>Customer Complaint</h3>
            <input name="customerId" placeholder="Customer ID" required />
            <textarea name="issue" placeholder="Issue" required />
            <button type="submit">Submit</button>
            <p className="msg">{complaintMsg}</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Akola Telecom & IP Networks Pvt Ltd <br />
          T-13, 3rd Floor, Dariyav Height, MG Road, Akola – 444001
        </p>
      </footer>
    </>
  );
}

export default App;
