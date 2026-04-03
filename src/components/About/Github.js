import React from "react";
import { Row, Col } from "react-bootstrap";
import { GitHubCalendar } from "react-github-calendar";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Col xs={12} style={{ textAlign: "center" }}>
        <h1 className="project-heading pb-4">
          Days I <strong className="purple">Code</strong>
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflowX: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "10px",
            boxSizing: "border-box",
          }}
        >
          <GitHubCalendar
            username="Tuberamesh"
            blockSize={12}
            blockMargin={4}
            color="#c084f5"
            fontSize={14}
          />
        </div>
      </Col>
    </Row>
  );
}

export default Github;