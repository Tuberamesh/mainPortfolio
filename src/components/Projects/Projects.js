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

          {/* NEW PROJECT — Added June 2026 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Users/ramesha/Documents/AllinOne/projects/portfolio/Portfolio/public/Overview.png"}
              title="Influencer Marketing ROI Dashboard"
              description="A business intelligence dashboard that transforms influencer campaign data into actionable decisions. Covers platform benchmarking, ROI tracking, engagement heatmaps, and dynamic KPI storytelling — built with HTML, CSS, JavaScript, and Chart.js."
              ghLink="https://github.com/Tuberamesh/Influencer-Marketing-ROI"
              demoLink="https://tuberamesh.github.io/Influencer-Marketing-ROI-/dashboard.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/ipl_thumb.png"}
              title="IPL Cricket Data Analysis — Full Pipeline"
              description="End-to-end pipeline on 950+ IPL matches across 16 seasons. Analyzed 500+ players using Python, Pandas, SQLite & Tableau. Covers data cleaning, SQL queries, EDA, and an interactive dashboard with win trends, top scorers & team performance."
              ghLink="https://github.com/Tuberamesh/ipl-cricket-analytics"
              demoLink="https://public.tableau.com/app/profile/ramesh.g8388/viz/IPLDashboard_17746975731930/Dashboard1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/rfm.jpeg"}
              title="RFM Customer Segmentation"
              description="Segmented 4,338 customers from a UK retail dataset (541,909 rows) into 11 RFM segments. Champions segment alone drove £5.9M in revenue. Built entirely with Python and Pandas."
              ghLink="https://github.com/Tuberamesh/Customer-Segmentation-Using-RFM-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/AmazonSales.jpeg"}
              title="Amazon Sales Performance Dashboard"
              description="Analyzed 100K+ rows of sales data across 6 product categories and 5 regions. Built an interactive Tableau dashboard revealing top SKUs, monthly trends, and regional growth opportunities."
              ghLink="https://github.com/Tuberamesh/Amazon-sales-analytics-dashboard"
              demoLink="https://public.tableau.com/app/profile/ramesh.g8388/viz/Amazonsalesperformance/Dashboard1?publish=yes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Revenue.jpeg"}
              title="India Revenue Analysis — SQL + Tableau"
              description="Queried 3+ years of revenue data using 15+ SQL queries including CTEs and window functions. Identified top 5 products driving 68% of total revenue. Visualized monthly growth trends in Tableau."
              ghLink="https://github.com/Tuberamesh/India-Revenue-Analysis-Tableau-SQL-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/sales.jpeg"}
              title="Sales Dashboard (Tableau)"
              description="Interactive Tableau dashboard tracking sales, profit margins, and KPIs across product segments. Enables drill-down analysis by category, region, and time period."
              demoLink="https://public.tableau.com/app/profile/ramesh.g8388/viz/salesdashboard-1_17588282922910/Dashboard1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/library2.jpeg"}
              title="Library Books Management System"
              description="SQL database system managing 1,000+ books with issue/return tracking, overdue detection, and member records. Designed with normalized schema across 4 relational tables."
              ghLink="https://github.com/Tuberamesh/library-books-management"
              demoLink="https://github.com/Tuberamesh/library-books-management/blob/main/books.csv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/weather.jpeg"}
              title="Weather App (Python + API)"
              description="Python CLI app fetching real-time weather for any city using OpenWeatherMap API. Returns temperature, humidity, wind speed, and a 5-day forecast in under 2 seconds."
              ghLink="https://github.com/Tuberamesh/OfficialWeb/blob/main/app.html"
              demoLink="https://tuberamesh.github.io/Decoder/app.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/affiliate.jpeg"}
              title="Amazon Affiliate Web Page (HTML/CSS)"
              description="Responsive affiliate marketing page built with pure HTML/CSS. Optimized for mobile with product cards, CTA buttons, and UTM-tracked links for conversion analytics."
              ghLink="https://github.com/Tuberamesh/tech-Deals"
              demoLink="https://tuberamesh.github.io/tech-Deals/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/portfolio.jpeg"}
              title="Personal Portfolio Website"
              description="This portfolio — built with React.js, Bootstrap, and custom CSS. Features particle animations, project cards, GitHub activity calendar, and a fully responsive layout across all screen sizes."
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