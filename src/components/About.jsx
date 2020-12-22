import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <section className="border-top" id="about">
      <h1 className="text-center">About & Education</h1>
      <hr className="hr-title mb-5" />
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-lg-5 text-center my-4">
            <div className="hexagon rounded-circle mb-4"> </div>
            <div className="me p-5">
              <p>Hi.</p>
              <p>I'm a developer based in brussel.</p>
              <p>
                I have a passion for development and love to create for web and
                mobile devices.I like teamwork, it allows us to share our ideas
                and help other people to contribute to the realization of the
                project
              </p>
            </div>
          </div>
          <div className="col-lg-2 text-center mb-5 d-flex align-items-center justify-content-center flex-column pr-5">
            <h2>Education</h2>
            <div className="d-flex allArrow">
              <i className="arrow rightV" />
              <i className="arrow rightV" />
              <i className="arrow rightV" />
              <i className="arrow rightV" />
              <i className="arrow rightV" />
              <i className="arrow rightV" />
            </div>
          </div>
          <div className="col-lg-5 text-center my-4">
            <div className="timeline">
              <div className="containerT left">
                <div className="content">
                  <h2>2020</h2>
                  <p>
                    Business Training :<br />
                    Développeur Java/EE & Spring
                  </p>
                </div>
              </div>
              <div className="containerT right">
                <div className="content contentR">
                  <h2>2018-2019</h2>
                  <p>
                    MolenGeek Coding School :<br />
                    Développeur web full stack
                  </p>
                </div>
              </div>
              <div className="containerT left">
                <div className="content">
                  <h2>2015-2018</h2>
                  <p>
                    HE2B ESI :<br />
                    Bachelier informatique & systèmes orientation réseaux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
