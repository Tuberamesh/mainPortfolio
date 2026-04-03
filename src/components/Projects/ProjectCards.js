import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view" style={{ marginBottom: "20px" }}>
      <Card.Img variant="top" src={imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title><strong>{title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px" }}
          >
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}

        {!isBlog && demoLink && (
          <Button
            variant="success"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;