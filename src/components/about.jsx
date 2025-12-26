import React from "react";

export const About = (props) => {
  return (
    <section id="about" className="about-modern">
      <div className="container">
        <div className="row align-center">

          {/* LEFT : IMAGE */}
          <div className="col-md-6">
            <img
              src="img/img1.jpg"
              className="img-responsive about-img"
              alt="Akola Telecom Network"
            />
          </div>

          {/* RIGHT : CONTENT */}
          <div className="col-md-6">
            <div className="about-content">
              <h2>About Akola Telecom & IP Networks</h2>

              <p className="about-desc">
                {props.data ? props.data.paragraph : "loading..."}
              </p>

              {/* <div className="about-stats">
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
              </div> */}

              <h3>Why Choose Us?</h3>

              <div className="row">
                <div className="col-sm-6">
                  <ul className="about-list">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>

                <div className="col-sm-6">
                  <ul className="about-list">
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
