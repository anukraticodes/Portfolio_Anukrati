import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";

import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{ marginLeft: "10px", fontWeight: 600 }}>
            anukraticodes
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Internal Pages */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Optional Blogs (remove if you don't want it) */}
            {/* <Nav.Item>
              <Nav.Link href="#" onClick={(e) => e.preventDefault()}>
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* Social Buttons */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/anukraticodes"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="GitHub"
                title="GitHub"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/anukratichaturvedi/"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://x.com/anukratiw"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="X"
                title="X (Twitter)"
              >
                <AiOutlineTwitter style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://leetcode.com/u/anukraticodes/"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="LeetCode"
                title="LeetCode"
              >
                <SiLeetcode style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://codeforces.com/profile/chaturvedianukrati4"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="Codeforces"
                title="Codeforces"
              >
                <SiCodeforces style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
