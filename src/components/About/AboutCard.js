import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Iñaki Armendariz </span>
            from <span className="purple"> La Plata, Argentina.</span>
            <br /> I am a student pursuing the opportunity to become a
            professional web developer.
            <br />
            Additionally, I am currently working as a freelancer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Futboll)
            </li>
            <li className="about-activity">
              <ImPointRight /> Work as a Bartender on weekends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Iñaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
