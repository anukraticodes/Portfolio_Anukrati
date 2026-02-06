import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Add these images in: src/Assets/Projects/
import shakti from "../../Assets/Projects/blog.png";
import seatsense from "../../Assets/Projects/seatsense.png";

import careerstack from "../../Assets/Projects/careerstack.png";
import stocksensei from "../../Assets/Projects/stocksensei.png";
import myntra from "../../Assets/Projects/myntra.png";
import gemforge from "../../Assets/Projects/gemforge.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I’ve built recently — spanning full-stack apps,
          real-time systems, and AI-powered tools.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* SHAKTI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shakti}
              isBlog={false}
              title="SHAKTI: Image Recognition Chatbot"
              description="Engineered a distributed multimodal LLM system integrating vision-language modeling. Built the frontend using React/Next.js and the backend using FastAPI, improving performance by ~25%."
              ghLink="https://github.com/anukraticodes"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* SeatSense */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seatsense}
              isBlog={false}
              title="SeatSense: Smart Seat Monitoring System"
              description="Prototyped a hardware + software system using Arduino, IR sensors, and ESP8266. Built a backend using PHP + MySQL (WAMP) with a dashboard for data processing and route optimization."
              ghLink="https://github.com/anukraticodes/SeatSenseProject"
              // demoLink="https://github.com/anukraticodes/SeatSenseProject"
            />
          </Col>

          {/* StockSensei */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocksensei}
              isBlog={false}
              title="StockSensei: Stock Analysis Platform"
              description="Built a real-time predictive stock analysis platform in React with ~1s update latency. Developed pipelines for market insights and an AI portfolio builder using Prophet, plus interactive learning modules increasing engagement by ~60%."
              ghLink="https://github.com/anukraticodes/stock-sensei-tw"
              demoLink="https://stock-sensei-1dt1iw7gz-chaturvedianukrati4-gmailcoms-projects.vercel.app/dashboard"
            />
          </Col>

          {/* Myntra Social */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra Social"
              description="Designed a taggable-post feature using JavaScript, HTML, and CSS. Built the mobile UI in React Native and integrated backend APIs via Node.js, reducing response time by ~20%."
              ghLink="https://github.com/anukraticodes/Myntra_Social"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* GemForge */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemforge}
              isBlog={false}
              title="GemForge: Text/Voice → UI Code Generator"
              description="Built a web tool that generates responsive UI code from text + voice using Gemini 2.0 and Firebase. Integrated Firebase Genkit, Firestore, Auth, and Web Speech API for AI workflows, storage, and voice input."
              ghLink="https://github.com/anukraticodes/GemForge"
              demoLink="https://gem-forge.vercel.app/generate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerstack}
              isBlog={false}
              title="CareerStack: Smart File Management System"
              description="Built a backend-driven document management platform to securely upload, store, and automatically categorize career-related documents. Implemented a Java Spring Boot backend with RESTful APIs, JWT-based authentication, MySQL schema design, and integration with a Python ML microservice for document classification.
"
              ghLink="https://github.com/anukraticodes/CareerStack"
              // demoLink="https://github.com/anukraticodes/SeatSenseProject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
