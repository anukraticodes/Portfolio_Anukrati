import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Anukrati Chaturvedi</h3>
        </Col>

        {/* <Col md="4" className="footer-copywright">
          <h3>© {year}</h3>
        </Col> */}

        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/anukraticodes"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* X (Twitter) */}
            <li className="social-icons">
              <a
                href="https://x.com/anukratiw"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anukratichaturvedi/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* LeetCode */}
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/anukraticodes/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            </li>

            {/* Codeforces */}
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/chaturvedianukrati4"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
              >
                <SiCodeforces />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
