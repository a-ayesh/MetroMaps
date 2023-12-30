import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactUs = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the feedback submission, for example:
    console.log('Feedback submitted:', feedback);
    //Write to DB
  };

  return (
    <div>
      <h2 id='style-two'>Contact Us</h2>
        <section id = "feature">
        <h3>Get in Touch</h3>
        <p>We'd love to hear from you! Contact us through any of the following means:</p>
        </section>
      <div id='style-two'>

        <h4>Contact Information</h4>
        <p>
          <strong>Address:</strong> NUST Hostels/H-12, Islamabad, 44000, Pakistan
          <br />
          <strong>Email:</strong> General Inquiries: info@metrotrack.com
          <br />
          <strong>Phone:</strong> Main Office: +123 456 7890
        </p>

        <h4>Social Media</h4>
        <p>
          Stay connected with us on social media:
          <br />
          <Button className="m-1" variant = 'dark'>Twitter</Button>{''}
          <Button className="m-1" variant = 'info'>Facebook</Button>{''}
          <Button className="m-1" variant = 'danger'>Instagram</Button>{''}
          <Button className="m-1" variant = 'primary'>LinkedIn</Button>{''}
        </p>
      </div>


      <div id='feature'>
        <h3>Feedback Form</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="feedbackForm">
            <Form.Label>Your Feedback:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
          <br/>
          <Button variant="success" type="submit">
            Submit Feedback
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
