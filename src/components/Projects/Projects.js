import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogDeCafe from "../../Assets/Projects/blogDeCafe.png";
import Rivelle from "../../Assets/Projects/rivelle.png";
import musicFestival from "../../Assets/Projects/musicFestival.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rivelle}
              isBlog={false}
              title="Rivelle"
              description="E-commerce Store with its own API from scratch, using React, Redux Toolkit, Node.js, Express, Sequelize, Bcrypt, Nodemailer, JWT, and numerous other libraries to achieve authentication through Google or GitHub, and enable payments through Stripe, PayPal, and Mercado Pago.."
              ghLink="https://github.com/NerdyWorld"
              demoLink="https://rivelle.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicFestival}
              isBlog={false}
              title="musicFestival"
              description="first practice of gulp to automate tasks, such as compiling sass, minifying js, compressing images, etc."
              ghLink="https://github.com/IArmendariz97/festivaldemusica"
              demoLink="https://strong-pithivier-053564.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogDeCafe}
              isBlog={false}
              title="blogDeCafe"
              description="Blog de Café is a project where I put into practice what I learned about HTML and CSS adding my first knowledge of JavaScript."
              ghLink="https://github.com/IArmendariz97/BlogDeCafe-misinicios"
              demoLink="https://proyectowebnro3.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
