import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'


const ContactUs = () => {
  const [feedback, setFeedback] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the feedback submission, for example:
    console.log('Feedback submitted:', feedback);
    //Write to DB
  };

  return (
    <div>
      <h2 id='style-two'>{t("contact.title")}</h2>
        <section id = "feature">
        <h3>{t("contact.heading1")}</h3>
        <p>{t("contact.para1")}</p>
        </section>
      <div id='style-two'>

        <h4>{t("contact.heading2")}</h4>
        <p>
          <strong>{t("contact.Address_key")}</strong>{t("contact.Address_value")}
          <br />
          <strong>{t("contact.Email_key")}</strong>{t("contact.Email_value")}
          <br />
          <strong>{t("contact.Phone_key")}</strong>{t("contact.Phone_value")}
        </p>

        <h4>{t("contact.heading3")}</h4>
        <p>
        {t("contact.para3")}
          <br />
          <Button className="m-1" variant = 'dark'>{t("contact.button1")}</Button>{''}
          <Button className="m-1" variant = 'info'>{t("contact.button2")}</Button>{''}
          <Button className="m-1" variant = 'danger'>{t("contact.button3")}</Button>{''}
          <Button className="m-1" variant = 'primary'>{t("contact.button4")}</Button>{''}
        </p>
      </div>


      <div id='feature'>
        <h3>{t("contact.heading4")}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="feedbackForm">
            <Form.Label>{t("contact.para1")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder={t("contact.template")}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
          <br/>
          <Button variant="success" type="submit">
          {t("contact.submit")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
