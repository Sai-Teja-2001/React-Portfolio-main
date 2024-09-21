import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bms from "../../Assets/Projects/bms.png"
import crypto from "../../Assets/Projects/crypto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="crypto-dashboard"
              description=" This is a Crypto currency dashboard project which shows price charts, calculates exchange rates and displays list of top cryptocurrencies according to their market cap. It is created with React and Redux Javascript libraries, styled component and utilize CoinGecko's API for information."
              ghLink="https://github.com/Sai-Teja-2001/crypto-dashboard"
              demoLink="crypto-dashboard-alpha-sandy.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bms}
              isBlog={false}
              title="movie ticket booking"
              description="this is a simple and basic movie ticket booking platform"
              ghLink="https://github.com/Sai-Teja-2001/BookMyShow"
              demoLink="https://bookmyshow10.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
