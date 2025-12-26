import React, { useState } from "react";

const API_URL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://atipn-backend.onrender.com";

export const Gallery = () => {
  const [type, setType] = useState("connection");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    notify("Submitting request...");

    try {
      let payload = {};

      if (type === "connection") {
        payload = {
          type: "connection",
          name: e.target.name.value,
          mobile: e.target.mobile.value,
          email: e.target.email.value,
          address: e.target.address.value,
        };
      } else {
        payload = {
          type: "complaint",
          name: e.target.name.value,
          mobile: e.target.mobile.value,
          email: e.target.email.value,
          issue: e.target.issue.value,
        };
      }

      const res = await fetch(`${API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        notify("Submitted successfully ✅");
        e.target.reset();
      } else {
        notify("Submission failed ❌");
      }
    } catch (err) {
      notify("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section className="contact-modern" id="gallery">
      {toast && <div className="toast">{toast}</div>}

      <div className="container">
        <div className="section-title text-center">
          <h2>Contact Us</h2>
          <p>New connection enquiry or raise a complaint</p>
        </div>

        {/* MODERN SWITCH */}
        <div className="toggle-pill">
          <span
            className={type === "connection" ? "active" : ""}
            onClick={() => setType("connection")}
          >
            New Connection
          </span>
          <span
            className={type === "complaint" ? "active" : ""}
            onClick={() => setType("complaint")}
          >
            Complaint
          </span>
        </div>

        {/* FORM CARD */}
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            {/* COMMON FIELDS */}
            <input name="name" placeholder="Full Name" required />
            <input name="mobile" placeholder="Mobile Number" required />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            {/* TYPE SPECIFIC */}
            {type === "connection" ? (
              <textarea name="address" placeholder="Address" required />
            ) : (
              <textarea
                name="issue"
                placeholder="Describe your issue"
                required
              />
            )}

            <button disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
