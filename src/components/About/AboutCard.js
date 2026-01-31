import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I build full-stack applications, automation tools, and data
            pipelines. My flagship project,{" "}
            <span className="accent">Vista</span> is a Flask/React analytics
            platform serving 60+ properties with real-time operational
            intelligence.
            <br />
            <br />
            I hold a B.S. in Information Sciences and Technology from{" "}
            <span className="accent">Penn State</span> (2024).
            <br />
            <br />
            What I bring to the table:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack development with Python, Flask, React, and SQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Data engineering — ETL pipelines, analytics engines, forecasting models
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud deployment and infrastructure (AWS, Azure)
            </li>
          </ul>

          <p style={{ color: "rgb(126 155 182)" }}>
            "You miss 100% of the shots you don't take." (Wayne Gretzky){""}
          </p>
          <footer className="blockquote-footer">Michael Scott</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
