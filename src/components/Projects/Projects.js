import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import streaksaver from "../../Assets/Projects/streaksaverLogo.png";
import cerebro from "../../Assets/Projects/cerebroLogo.png";
import m365 from "../../Assets/Projects/M365_screenshot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vista Analytics Platform"
              description="Full-stack property analytics platform with Flask/FastAPI backend, React 18/TypeScript frontend using Radix UI, and SQL Server with connection pooling. Features a custom concurrent cache system with stale-if-error fallback, break-even forecasting with dynamic buffer calculations, JWT + Firebase authentication with RBAC, and automated multi-sheet Excel report generation using openpyxl. Serves 60+ properties and deployed with Docker."
              ghLink="https://github.com/bkh5433/Vista"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={m365}
              isBlog={false}
              title="M365 License Automation"
              description="Flask web app that processes Azure-exported CSV license data using Pandas, generating multi-sheet Excel reports with cost analysis via OpenPyXL. Features user authentication, Docker deployment with Nginx, and reduced an hourly monthly process to 1 minute."
              // ghLink="https://github.com/bkh5433/AIONLicenseScraper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streaksaver}
              isBlog={false}
              title="StreakSaver"
              description="iOS reminder app built with Swift and UIKit (2017-2018), featuring UserNotifications for scheduled local alerts, CloudKit integration for personalized greetings, and CoreLocation with Mapbox for geofence-based reminders. Includes Firebase analytics and Crashlytics monitoring. Deployed on App Store with 3.3K+ users around the world."
              demoLink="https://appadvice.com/app/streaksaver-snapstreak-helper/1291734147"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cerebro}
              isBlog={false}
              title="Cerebro"
              description="Streamlit-based sabermetrics portal for Penn State Abington's D3 baseball team. Scrapes NCAA stats via BeautifulSoup4, calculates advanced metrics (wOBA, FIP, wRAA, wRC) using season-specific linear weights, and stores data in Firebase Firestore. Features AWS Cognito authentication, Pandas data pipelines, and Plotly visualizations."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
