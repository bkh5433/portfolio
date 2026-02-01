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
              I'm <span className="accent">Brandon Hightower</span>, a{" "}
              <span className="accent">software developer</span> and{" "}
              <span className="accent">data engineer</span> based in the{" "}
              <span className="accent">Greater Philadelphia</span> area, focused
              on building tools that solve real business problems.
              <br />
              <br />
              My technical strengths include{" "}
              <i>
                <b className="accent">
                  Python, Flask, FastAPI, SQL, JavaScript, React, and Node.js.
                </b>
              </i>
              <br />
              <br />
              <span className="accent">Automation</span> and{" "}
              <span className="accent">data pipelines</span> are where I focus
              most—creating tools that eliminate manual effort and support
              better decision-making.
              <br />
              <br />
              Day-to-day, I work with{" "}
              <i>
                <b className="accent">AI-assisted development tools</b>
              </i>{" "}
              like Cursor and Claude, and build integrations using the{" "}
              <b className="accent">Model Context Protocol (MCP)</b> to extend
              AI capabilities into real workflows.
              <br />
              <br />
              My core development toolkit includes{" "}
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
