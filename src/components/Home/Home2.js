import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Data Science & Analytics enthusiast</b>,{" "}
              <b className="purple">Content Creator</b>, and{" "}
              <b className="purple">Freelancer</b>, passionate about turning ideas into actionable insights and engaging content.
              <br />
              <br />
              I work with <i>
                <b className="purple">Python, SQL, Pandas, Tableau, and APIs</b>
              </i>{" "}
              to analyze data, track social media growth, and build automation projects.
              <br />
              <br />
              Alongside data, I love creating high-quality{" "}
              <b className="purple">videos, thumbnails, and educational content</b> that help students and creators grow online.
              <br />
              <br />
              I’m also exploring <b className="purple">freelancing opportunities</b> to combine my skills in analytics, content creation, and video editing to deliver real-world solutions.
              <br />
              <br />
              Whenever possible, I experiment with <b className="purple">YouTube & Instagram APIs</b> and modern tools to make dashboards, reports, and insights fully interactive and easy to understand.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
