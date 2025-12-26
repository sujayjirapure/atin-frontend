import React, { useState } from "react";

const API_URL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://atipn-backend.onrender.com";

export default function ContactForm() {
  const [type, setType] = useState("connection"); // connection | complaint
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let url = "";
      let payload = {};

      if (type === "connection") {
        url = `${API_URL}/api/inquiry`;
        payload = {
          name: e.target.name.value,
          mobile: e.target.mobile.value,
          address: e.target.address.value,
        };
      } else {
        url = `${API_URL}/api/complaint`;
        payload = {
          customerId: e.target.customerId.value,
          issue: e.target.issue.value,
        };
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      data.success
        ? notify("Submitted successfully ✅")
        : notify("Submission failed ❌");

      e.target.reset();
    } catch (err) {
      notify("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      {toast && <div className="toast">{toast}</div>}

      <div className="bo-container">
        <h2 className="contact-title">Contact Us</h2>

        {/* SWITCH */}
        <div className="form-switch">
          <button
            className={type === "connection" ? "active" : ""}
            onClick={() => setType("connection")}
          >
            New Connection
          </button>
          <button
            className={type === "complaint" ? "active" : ""}
            onClick={() => setType("complaint")}
          >
            Complaint
          </button>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {type === "connection" ? (
            <>
              <input name="name" placeholder="Name" required />
              <input name="mobile" placeholder="Mobile" required />
              <textarea name="address" placeholder="Address" required />
            </>
          ) : (
            <>
              <input
                name="customerId"
                placeholder="Customer ID"
                required
              />
              <textarea
                name="issue"
                placeholder="Describe your issue"
                required
              />
            </>
          )}

          <button disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
