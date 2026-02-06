import React from "react";
import { Col, Row } from "react-bootstrap";

import Cpp from "../../Assets/TechIcons/C++.svg";
import Go from "../../Assets/TechIcons/go.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Java from "../../Assets/TechIcons/Java.svg";

import {
  SiNextdotjs,
  SiSpring,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiReact,
  SiOcaml
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Languages */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C/C++" />
        <div className="tech-icons-text">C / C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="Go" />
        <div className="tech-icons-text">Go</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* OCaml */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOcaml fontSize={"24px"} />
        <div className="tech-icons-text">OCaml</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Frameworks / Libraries */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact fontSize={"24px"} />
        <div className="tech-icons-text">React Native</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpring fontSize={"24px"} />
        <div className="tech-icons-text">Spring</div>
      </Col>

      {/* Databases / Tools */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"24px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind</div>
      </Col>

    </Row>
  );
}

export default Techstack;
