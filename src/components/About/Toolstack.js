import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  SiApple,
  SiGooglechrome,
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
  SiCanva,
  SiReplit
} from "react-icons/si";

import { FaServer } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
        <div className="tech-icons-text">macOS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
        <div className="tech-icons-text">Replit</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaServer />
        <div className="tech-icons-text">Render</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <div className="tech-icons-text">Canva</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
