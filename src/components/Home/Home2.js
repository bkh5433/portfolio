import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import codingAnimation from "../../Assets/lottie/codingAnimation.json";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="accent"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a software engineer and data engineer who builds tools that
              solve real business problems.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="accent">
                  {" "}
                  Python, Flask, FastAPI, SQL, JavaScript, React, and Node.js.{" "}
                </b>
              </i>
              <br />
              <br />
              My flagship project is{" "}
              <b className="accent">Vista</b> — a full-stack analytics platform
              I built from scratch that serves 60+ properties with real-time
              operational intelligence, forecasting models, and automated
              reporting.
              <br />
              <br />
              I'm passionate about{" "}
              <i>
                <b className="accent">automation, data pipelines, </b>
              </i>
              and building{" "}
              <i>
                <b className="accent"> tools</b>
              </i>{" "}
              that eliminate manual work and drive better decisions.
              <br />
              <br />
              I work daily with{" "}
              <i>
                <b className="accent">
                  AI-assisted development tools
                </b>
              </i>{" "}
              like Cursor and Claude, and I build integrations using the{" "}
              <b className="accent">Model Context Protocol (MCP)</b> to extend
              AI capabilities into real workflows.
              <br />
              <br />
              My toolkit includes{" "}
              <i>
                <b className="accent">
                  PyCharm, DataGrip, Postman, and VS Code.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Lottie animationData={codingAnimation} loop={true} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
