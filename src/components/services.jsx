import React from "react";

export const Services = (props) => {
  return (
    <section id="services" className="services-modern text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Reliable, high-speed internet solutions for homes, businesses, and
            enterprises in Akola.
          </p>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6">
                  <div className="service-card">
                    <div className="service-icon">
                      <i className={d.icon}></i>
                    </div>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
