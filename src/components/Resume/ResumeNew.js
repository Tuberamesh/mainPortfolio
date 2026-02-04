import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Original Google Drive link
  const resumeLink = "https://drive.google.com/file/d/1Nu-CPaS3rUiA8s5nmc0NiOTWTipLq-OO/view?usp=drivesdk";

  // Convert to embed link for iframe preview
  const embedLink = "https://drive.google.com/file/d/1Nu-CPaS3rUiA8s5nmc0NiOTWTipLq-OO/preview";

  return (
    <Container
      fluid
      className="resume-section"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* PDF Preview */}
      <Row style={{ justifyContent: "center", marginBottom: "20px", width: "100%" }}>
        <iframe
          src={embedLink}
          title="Resume Preview"
          style={{
            width: "80%",
            height: "500px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        ></iframe>
      </Row>

      {/* Download CV Button */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={resumeLink}
          target="_blank"
          style={{ maxWidth: "250px", fontSize: "1.2rem" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* Footer / Branding */}
      <Row
        style={{
          justifyContent: "center",
          marginTop: "30px",
          color: "white",
          fontSize: "1rem",
        }}
      >
        Designed & Developed by <b className="purple">Ramesha Gangadharappa</b>
      </Row>
    </Container>
  );
}

export default ResumeNew;
