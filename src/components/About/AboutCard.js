import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Anukrati Chaturvedi</span> — a Computer
            Science undergraduate who enjoys building reliable software and
            solving hard problems at scale.
            <br />
            <br />
            I’ve spent the last few years exploring different facets of software
            development — from <span className="purple">competitive programming</span> and
            <span className="purple"> open-source collaboration</span> to shipping
            full-stack products during hackathons and industry programs. These
            experiences have shaped how I think about code: clean abstractions,
            thoughtful design, and real-world impact matter.
            <br />
            <br />
            I’m driven by curiosity, consistency, and the belief that strong
            engineering comes from continuous learning and building alongside
            others.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            Building software that scales, lasts, and helps people — one project at a time.
          </p>
          {/* <footer className="blockquote-footer">Anukrati</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}



export default AboutCard;
