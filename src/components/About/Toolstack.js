import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack } from "react-icons/si";

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
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />
      </Col>
    </Row>
  );
}

export default Toolstack;
