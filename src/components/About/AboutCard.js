import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ramesh G</span>{" "}
            from <span className="purple">Bengaluru, India</span>.
            <br /> <br />
          
            I specialize in{" "}
            <span className="purple">data analysis, Python, basic web projects (HTML/CSS), 
              and technical content creation.</span>{" "}  <br />
     <br />
            <span>I also have strong skills in</span> <br />
 
<span className="purple">video editing and thumbnail design,</span>{" "}

<span className="">helping brands and creators communicate clearly and professionally.</span>{" "}
           <br /><br />
            <span className="">I focus on</span> {" "}
            <span className="purple">simple, practical, and reliable solutions</span>
                      <span className="">-whether it’s analyzing data, building a 
              small web project, or creating engaging content.</span> {" "}
            <br /><br /><br />

            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies 🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
