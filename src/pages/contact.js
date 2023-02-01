import React from "react";
import styles from "../styles/contact.module.scss";
import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: ""});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // logic to submit the form data (e.g. to an API) goes here
    if(values.name === "" || values.email === "" || values.message === "") {
        console.log('error')
    } else {
        console.log('succes')
        setValues({ name: "", email: "", message: "" });
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
    <Container className={styles.container}>
    {showSuccess && (
      <Alert variant="success">Form submitted successfully!</Alert>
    )}
    {showError && (
      <Alert variant="danger">Something went wrong. Please try again.</Alert>
    )}
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group controlId="formName">
        <Form.Label className={styles.label}>Name</Form.Label>
        <Form.Control
          className={styles.input}
          type="text"
          placeholder="Enter your name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label className={styles.label}>Email address</Form.Label>
        <Form.Control
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label className={styles.label}>Message</Form.Label>
        <Form.Control
          className={styles.textarea}
          as="textarea"
          rows="3"
          placeholder="Enter your message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="btn">
        <Button variant="secondary text-light" type="submit"  className={styles.button}> submit</Button> </div>
    </Form>
  </Container>
  </div>
);
};


