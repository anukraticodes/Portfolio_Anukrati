import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a <b className="purple">third-year B.Tech student in Computer Science</b> at
              <b className="purple"> IIIT Gwalior</b>, passionate about building meaningful
              software and continuously improving my problem-solving skills.
              <br />
              <br />
              I actively take part in technical programs and communities and I am a member of
              <b className="purple"> D.E. Shaw-Desis Ascend Educare</b> and the
              <b className="purple"> NXP Women-in-Tech (WIT)</b> initiative, where I collaborate,
              learn from mentors, and contribute to real-world learning activities.
              <br />
              <br />
              I enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  Data Structures & Algorithms, web development, and open-source projects
                </b>
              </i>
              and I regularly participate in coding events, workshops, and developer programs
              to strengthen both my technical and professional skills.
              <br />
              <br />
              Currently, I am focused on building projects using
              <b className="purple"> Java, C++, GoLang, JavaScript</b> and modern frontend tools such as
              <b className="purple"> React</b>, while exploring backend development with
              <b className="purple"> Node.js</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Anukrati avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
