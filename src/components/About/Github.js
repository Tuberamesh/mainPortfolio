import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

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
      <Col xs={12} md={10} lg={8} style={{ textAlign: "center" }}>
        <h1 className="project-heading pb-4">
          Days I <strong className="purple">Code</strong>
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <div
            style={{
              transform: "scale(0.7)",
              transformOrigin: "top center"
            }}
          >
            <GitHubCalendar
              username="Tuberamesh"
              blockSize={9}
              blockMargin={1.8}
              color="#c084f5"
              fontSize={11}
            />
          </div>
        </div>

      </Col>
    </Row>
  );
}

export default Github;
