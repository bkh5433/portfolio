import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="accent">Code</strong>
      </h1>
      <GitHubCalendar
        username="bkh5433"
        blockSize={30}
        blockMargin={10}
        color="#6aabf5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
