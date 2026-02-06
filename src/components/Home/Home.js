import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> ANUKRATI CHATURVEDI</strong>
              </h1>

              <p style={{ color: "white", marginTop: "12px" }}>
                <span className="purple">Software Developer</span> • DSA •
                Projects • Competitive Programming
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/anukraticodes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* X */}
              <li className="social-icons">
                <a
                  href="https://x.com/anukratiw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="X"
                  title="X (Twitter)"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anukratichaturvedi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* LeetCode */}
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/anukraticodes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LeetCode"
                  title="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </li>

              {/* Codeforces */}
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/chaturvedianukrati4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Codeforces"
                  title="Codeforces"
                >
                  <SiCodeforces />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
