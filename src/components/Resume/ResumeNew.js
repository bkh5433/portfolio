import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeDownload = "https://drive.google.com/uc?export=download&id=1xRNnWd54sGtrVGrd2MOfcqkC-cJg-y68";
const resumeEmbed = "https://drive.google.com/file/d/1xRNnWd54sGtrVGrd2MOfcqkC-cJg-y68/preview";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeDownload}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", padding: "20px 0" }}>
          <iframe
            src={resumeEmbed}
            width={width > 786 ? "800" : "360"}
            height={width > 786 ? "1000" : "600"}
            allow="autoplay"
            title="Brandon Hightower Resume"
            style={{ border: "none" }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeDownload}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
