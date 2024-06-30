import React from "react";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  return (
    <div>
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
          <Form.Control as="tel" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
      </Form>
      <button className="btn-view-all">Submit</button>
    </div>
  );
};

export default ContactUs;
