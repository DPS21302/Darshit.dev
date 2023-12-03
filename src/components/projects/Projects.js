import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import collegpt from "../../images/collegpt.jpeg";
import barber from "../../images/barber.png";
import echallan from "../../images/echallan.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                    ColleGPT
                    </h5>
                    <img src={collegpt} alt={collegpt} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.collegpt.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fff",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      🌟Welcome to ColleGPT🚀, your ultimate College Companion is here to revolutionize your academic journey.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fff",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React.js, Node.js, MongoDB
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                    E-Challan Payment
                    </h5>
                    <img src={echallan} alt={echallan} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/DPS21302/SSIP-HACKATHON.com"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fff",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Our team has built a project on the real-world problem - “E-Challan Payment” which comes under the department of Smart City Ahmedabad Development Ltd. During the 36-hour live hackathon, we have provided the optimal and the best solution to the problem of Lower E-Challan Collection which is much better than the current existing system.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fff",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript, EJS, Node.js, MySQL 
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                    Online Hair Cut Booking System
                    </h5>
                    <img src={barber} alt={barber} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/DPS21302/online_hair_cut_booking_system"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fff",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A Payroll management System with feature like generate
                      payslip & reports. It manages salaries, leaves, branches,
                      employees, designations, shifts, holidays and employee
                      attendance. It has chat application so internal employees
                      can use that feature.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fff",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                     HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      Personal Portfolio
                    </h5>
                    <img src={pp} alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fff",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fff",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          {/* <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div> */}
        </Container>
      </Container>
    </div>
  );
}
