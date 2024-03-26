import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogDeCafe from "../../Assets/Projects/blogDeCafe.png";
import Rivelle from "../../Assets/Projects/rivelle.png";
import musicFestival from "../../Assets/Projects/musicFestival.png";
import notepad from "../../Assets/Projects/notepad.jpg";
import marvel from "../../Assets/Projects/marvel.png";
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notepad}
              isBlog={false}
              title="Notepad"
              description="This project aims to create a full-stack web application with two main phases. In the first phase, users can create, edit, delete, archive, and list notes. The second phase introduces the ability to add or remove categories (tags) to notes and filter them based on these categories. The application follows a Single Page Web Application (SPA) structure, utilizing separate frontend and backend components. A RESTful API is implemented in the backend, and proper architectural considerations are emphasized. The project requires content persistence in a relational database using an Object-Relational Mapping (ORM)"
              ghLink="https://github.com/IArmendariz97/NotepadOnline"
              demoLink="https://frontend-notepad.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Marvel app"
              description="La MARVEL APP es una aplicación web que te permite explorar información sobre personajes y cómics del universo de Marvel. 
              Características:
                Buscar personajes de Marvel.
                Filtrar resultados por personajes o cómics.
                Ver detalles de cada personaje, incluidos los cómics en los que aparece.
                Guardar búsquedas favoritas para acceder rápidamente en el futuro."
              ghLink="https://github.com/IArmendariz97/marvel"
              demoLink="https://marvel-app-m138.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vanzini}
              isBlog={false}
              title="Inmobiliaria de rosario"
              description="Una inombiliaria con mas de 3000 propiedades publicadas, con un sistema de busqueda avanzado y un sistema de administracion de propiedades."
              ghLink=""
              demoLink="https://staging.vanzini.com.ar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vanzini}
              isBlog={false}
              title="Gimnasio salud en movimiento"
              description="Una pagina para un gimnasio con un sistema de inscripcion y asignacion de rutinas particulares o grupales, ademas de seguimiento."
              ghLink="https://github.com/BiztekSolutions/Front-SeM"
              demoLink="https://salud-en-movimiento.com.ar/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
