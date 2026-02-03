import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Lottie from "lottie-react";
import landingAnimation from "../../Assets/lottie/landingAnimation.json";
import Techstack from "../About/Techstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { analytics, logEvent } from "../../firebase";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BRANDON HIGHTOWER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Lottie animationData={landingAnimation} loop={true} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="accent">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bkh5433"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  onClick={() => logEvent(analytics, 'social_click', { platform: 'github', location: 'home' })}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brandonahightower/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  onClick={() => logEvent(analytics, 'social_click', { platform: 'linkedin', location: 'home' })}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
