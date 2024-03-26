import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiDocker, SiJirasoftware,   SiIntellijidea, SiApachenetbeanside } from "react-icons/si";
import { FaGithub, FaGitlab } from "react-icons/fa";

import { DiTrello } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
    </Row>
  );
}

export default Toolstack;
