import React, { useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api"; // change after deploy

function App() {
  const [inq, setInq] = useState({
    name: "",
    mobile: "",
    address: ""
  });

  const [cmp, setCmp] = useState({
    customerId: "",
    issue: ""
  });

  const sendInquiry = async () => {
    try {
      const res = await fetch(`${API_URL}/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inq)
      });

      const data = await res.json();
      alert(data.message);
      setInq({ name: "", mobile: "", address: "" });
    } catch (err) {
      alert("Error sending inquiry");
    }
  };

  const sendComplaint = async () => {
    try {
      const res = await fetch(`${API_URL}/complaint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cmp)
      });

      const data = await res.json();
      alert(data.message);
      setCmp({ customerId: "", issue: "" });
    } catch (err) {
      alert("Error sending complaint");
    }
  };

  return (
    <div>
      <header>
        <h1>Akola Telecom & IP Networks Pvt Ltd</h1>
        <p>Reliable Internet Service Provider in Akola (500+ Customers)</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Akola Telecom & IP Networks Pvt Ltd is a trusted Internet Service Provider
          in Akola, Maharashtra.
        </p>
        <p>
          📍 T-13, 3rd Floor, Dariyav Height, MG Road, Akola – 444001
        </p>
      </section>

      <section className="forms">
        <div className="card">
          <h3>New Connection Inquiry</h3>

          <input
            placeholder="Your Name"
            value={inq.name}
            onChange={(e) =>
              setInq({ ...inq, name: e.target.value })
            }
          />

          <input
            placeholder="Mobile Number"
            value={inq.mobile}
            onChange={(e) =>
              setInq({ ...inq, mobile: e.target.value })
            }
          />

          <textarea
            placeholder="Address"
            value={inq.address}
            onChange={(e) =>
              setInq({ ...inq, address: e.target.value })
            }
          />

          <button onClick={sendInquiry}>Submit Inquiry</button>
        </div>

        <div className="card">
          <h3>Existing Customer Complaint</h3>

          <input
            placeholder="Customer ID"
            value={cmp.customerId}
            onChange={(e) =>
              setCmp({ ...cmp, customerId: e.target.value })
            }
          />

          <textarea
            placeholder="Describe your issue"
            value={cmp.issue}
            onChange={(e) =>
              setCmp({ ...cmp, issue: e.target.value })
            }
          />

          <button onClick={sendComplaint}>Submit Complaint</button>
        </div>
      </section>

      <footer>
        © 2025 Akola Telecom & IP Networks Pvt Ltd
      </footer>
    </div>
  );
}

export default App;
