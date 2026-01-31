import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPycharm} from "react-icons/si";
import { SiN8N } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { SiClaude } from "react-icons/si";
import { SiDatagrip } from "react-icons/si";
import { SiCursor } from "react-icons/si";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos fontSize={"24px"} />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="SiCursor" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm fontSize={"24px"} />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatagrip fontSize={"24px"} />
        <div className="tech-icons-text">DataGrip</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">*/}
      {/*  <img src={chrome} alt="Chrome" className="tech-icon-images" />*/}
      {/*  <div className="tech-icons-text">Chrome</div>*/}
      {/*</Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <SiN8N fontSize={"24px"} style={{ color: "#EA4B71" }} />
        <div className="tech-icons-text">n8n</div>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiClaude fontSize={"24px"} style={{ color: "#E57B3A" }} />
        <div className="tech-icons-text">Claude Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
