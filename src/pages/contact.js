import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import styles from "../styles/contact.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("contact");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // logic to submit the form data (e.g. to an API) goes here
    if (values.name === "" || values.email === "" || values.message === "") {
      console.log("error");
    } else {
      console.log("succes");
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
          <Alert variant="success">{t('success')}</Alert>
        )}
        {showError && (
          <Alert variant="danger">
            {t('danger')}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group controlId="formName">
            <Form.Label className={styles.label}>{t('name')}</Form.Label>
            <Form.Control
              className={styles.input}
              type="text"
              placeholder={t('name_placeholder')}
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className={styles.label}>{t('email')}</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder={t('email_placeholder')}
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label className={styles.label}>{t('message')}</Form.Label>
            <Form.Control
              className={styles.textarea}
              as="textarea"
              rows="3"
              placeholder={t('message_placeholder')}
              name="message"
              value={values.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="btn">
            <Button
              variant="secondary text-light"
              type="submit"
              className={styles.button}
            >
              {" "}
              {t('submit')}
            </Button>{" "}
          </div>
        </Form>
      </Container>
    </div>
  );
}
