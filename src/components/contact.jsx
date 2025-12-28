import React from "react";


export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE : GOOGLE MAP */}
            <div className="col-md-8">
              <div className="section-title">
                <h2>Our Location</h2>
                <p>
                  Visit our office or reach out to us using the contact
                  information provided.
                </p>
              </div>

              <div style={{ width: "100%", height: "380px" }}>
                <iframe
                  title="Akola Telecom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.017613182943!2d76.99652100033437!3d20.708794106721605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd731ef157873f1%3A0x89ef9c681712ac03!2sakola%20television%20network%20(ATN)!5e0!3m2!1sen!2sin!4v1766336601565!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SIDE : CONTACT INFO */}
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  T-13, 3rd Floor , Daryav Heights ,MG Road, Akola 444001
                </p>
              </div>

              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  +91 91460340000
                </p>
              </div>

              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  enquiry.atin@gmail.com
                </p>
              </div>
              {/* QR CODE */}
              <div className="qr-box">
                <img
                  src="/qr-website.png"
                  alt="Website QR Code"
                  className="qr-image"
                />
                <p className="qr-label">Website</p>
              </div>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      {/* FOOTER */}
      <div id="footer">
        <div className="container text-center">
          <p>
            © {new Date().getFullYear()} Akola Telecom & IP Networks Pvt Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};
