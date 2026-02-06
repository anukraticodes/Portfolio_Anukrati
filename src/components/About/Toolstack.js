import React from "react";
import { Col, Row } from "react-bootstrap";
// Existing Icons
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

// New Icons based on your Resume
import springIcon from "../../Assets/TechIcons/spring.svg"; // For LG Electronics internship [cite: 17]
import mysqlIcon from "../../Assets/TechIcons/mysql.svg"; // For database optimization work [cite: 18]
import firebaseIcon from "../../Assets/TechIcons/Firebase.svg"; // For GemForge project [cite: 51]
import gitIcon from "../../Assets/TechIcons/git.svg"; // For version control [cite: 15]
import postmanIcon from "../../Assets/TechIcons/postman (1).svg"; // Common for API testing (Axios) [cite: 17]
// import springBoot from "../../Assets/TechIcons/springboot.svg"; // Common for API testing (Axios) [cite: 17]

function Toolstack() {
  const tools = [
    { icon: macOs, name: "Mac OS" },
    { icon: vsCode, name: "VS Code" },
    { icon: intelliJ, name: "IntelliJ" },
    { icon: springIcon, name: "Spring Boot" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: gitIcon, name: "Git" },
    { icon: postmanIcon, name: "Postman" },
    { icon: chrome, name: "Chrome" },
    // { icon: springBoot, name: "Sprint Boot" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img src={tool.icon} alt={tool.name} className="tech-icon-images" />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;