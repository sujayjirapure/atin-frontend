import React from "react";
import "../App.css";

export default function WhatsAppFloat() {
  const phone = "919146034000"; // replace with your WhatsApp number
  const message = encodeURIComponent(
   "Hi Akola Telecom & IP Network Pvt Ltd Team,\nPlease contact me."
  );

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
       <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </div>
  );
}
