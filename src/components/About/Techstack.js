import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  SiPython,
  SiC,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiTableau,
  SiTensorflow,
  SiGithub,
  SiCanva,
  SiHtml5,
  SiCss3,
  SiYoutube,
  SiPostman
} from "react-icons/si";

import { FaFileExcel, FaVideo } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="tech-icons-text">C</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* Data & Analytics */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <div className="tech-icons-text">Tableau</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
        <div className="tech-icons-text">Excel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <div className="tech-icons-text">Canva</div>
      </Col>

      {/* Web & Content */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiYoutube />
        <div className="tech-icons-text">YouTube</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaVideo />
        <div className="tech-icons-text">DaVinci Resolve</div>
      </Col>

    </Row>
  );
}

export default Techstack;
