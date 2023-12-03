import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <h1
                style={{ fontSize: "100px",  color: 'rgb(42, 68, 151)', fontWeight: 700 }}
              >
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: 'rgb(42, 68, 151)',
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  C
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#60acff", fontWeight: 700 }}
              >
                50%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"pm"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#60acff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  C++
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#f8981d", fontWeight: 700 }}
              >
                75%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"java"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#f8981d",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  JAVA
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#f7e018", fontWeight: 700 }}
              >
                85%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"aa"}
                    aria-valuenow={"81"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#f7e018",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Javascript
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#00ed64", fontWeight: 700 }}
              >
                80%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"cr"}
                    aria-valuenow={"90"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#00ed64",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  MongoDB
                </h2>
              </div>
            </Col>
                    <Col md={4}>
                      <h1
                        style={{ fontSize: "100px", color: "#7e7e7e", fontWeight: 700 }}
                      >
                        75%
                      </h1>
                      <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                        <div class="progress">
                          <div
                            role={"progressbar"}
                            id={"exp"}
                            aria-valuenow={"85"}
                            aria-valuemin={"0"}
                            aria-valuemax={"100"}
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <h2
                          style={{
                            color: "#7e7e7e",
                            fontSize: "25px",
                            marginTop: "13px",
                            fontWeight: 700,
                          }}
                        >
                          Express.js
                        </h2>
                      </div>
                    </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#61dbfb", fontWeight: 700 }}
              >
                95%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"react"}
                    aria-valuenow={"86"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#61dbfb",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  React.js
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#43853d", fontWeight: 700 }}
              >
                75%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"ps"}
                    aria-valuenow={"86"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#43853d",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Node.jS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#ea8c10", fontWeight: 700 }}
              >
                65%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"88"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ea8c10",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  MySQL
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
