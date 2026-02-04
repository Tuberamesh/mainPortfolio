import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently in Data Science, Web Development, and Content Creation.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/weather.jpeg"
              title="Weather App (Python + API)"
              description="Command-line app to fetch and display real-time weather data using Python."
              ghLink="https://github.com/Tuberamesh/OfficialWeb/blob/main/app.html"
              demoLink="https://tuberamesh.github.io/Decoder/app.html"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="affiliate.jpeg"
              title="Amazon Affiliate Web Page (HTML/CSS)"
              description="Responsive website with product links for affiliate marketing."
              ghLink="https://github.com/Tuberamesh/tech-Deals"
              demoLink="https://tuberamesh.github.io/tech-Deals/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPlnlJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadg8UtTAwL3M_DJUYloUtYltIHicbZ2aXSmde-vFMmVXcSuLmWQ3AudAZDFnA_aem_si1WSXmsiXOM8qAD_ub70w"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="sales.jpeg"
              title="Sales Dashboard (Tableau)"
              description="Interactive Tableau dashboard showing sales, profit, and performance metrics."
              
              demoLink="https://public.tableau.com/app/profile/ramesh.g8388/viz/salesdashboard-1_17588282922910/Dashboard1"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="library.jpeg"
              title="Library Books Management System"
              description="Database-driven system to manage library books and track issue/return."
              ghLink="https://github.com/Tuberamesh/library-books-management"
              demoLink="https://github.com/Tuberamesh/library-books-management/blob/main/books.csv"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="social.jpeg"
              title="Social Media Analytics Dashboard"
              description="Dashboard using Python, SQL & Tableau to track YouTube & Instagram followers, views, and engagement."
              ghLink="https://github.com/yourusername/social-media-dashboard"
              demoLink="https://yourdemo.com/sm-dashboard"
            />
          </Col>

          {/* Project 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="portfolio.jpeg"
              title="Personal Portfolio Website"
              description="My personal portfolio built with React.js & Bootstrap to showcase my skills, projects, and freelance work."
              ghLink="https://github.com/Tuberamesh/Porfolio"
              demoLink="https://ramesh-dev-portfolio.lovable.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
