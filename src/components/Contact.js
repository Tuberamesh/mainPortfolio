import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const formspreeEndpoint = "https://formspree.io/f/xyzzlvpk"; // your Formspree link

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit. Try again later!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console.");
    }
  };

  return (
    <Container fluid className="resume-section" style={{ minHeight: "80vh", paddingTop: "40px" }}>
      <h1 className="text-center mb-4">
        Contact <strong className="purple">Me</strong>
      </h1>

      {submitted && <Alert variant="success">Form submitted successfully!</Alert>}

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>

          {/* Live Preview */}
          <div className="mt-4 p-3 border rounded" style={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <h5>Preview:</h5>
            <p><strong>Name:</strong> {formData.name || "Your name here"}</p>
            <p><strong>Email:</strong> {formData.email || "Your email here"}</p>
            <p><strong>Message:</strong> {formData.message || "Your message here"}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
