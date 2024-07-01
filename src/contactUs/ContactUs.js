import React from "react";
import Form from "react-bootstrap/Form";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="main-contact">
      <div>
        <h2 style={{ textAlign: "center", paddingBottom: "30px" }}>
          GET IN TOUCH
        </h2>
      </div>
      <div className="contact-form">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formemail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formphone">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control as="tel" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="textarea" />
          </Form.Group>
        </Form>
        <button className="btn-view-all">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
