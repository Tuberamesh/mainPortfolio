import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section style={{ overflowX: "hidden", width: "100%" }}>
      {/* Full width home section */}
      <Container fluid className="home-section" id="home" style={{ overflowX: "hidden" }}>
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Ramesh G</strong>
              </h1>

              <div style={{ paddingTop: "1rem" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", width: "100%", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Home2 section */}
      <Home2 />

      {/* Social & About Section */}
      <Container>
        <Row className="py-5">
          <Col md={12} className="home-about-social text-center">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links list-unstyled d-flex justify-content-center gap-3">
              <li className="social-icons">
                <a
                  href="https://github.com/Tuberamesh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Ramesh_183"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramesha-g-712965301"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/decoder_space?igsh=MXV4Y2h4OGV0NjI2MA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Techstack and Github */}
      <Techstack />
      <Github />
    </section>
  );
}

export default Home;
