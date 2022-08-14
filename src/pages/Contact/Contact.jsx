import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <h2 className='heading'> Have Some Question?</h2>
        <div className="inner">

          {/* <hr /> */}
          <div className="row">
            {/* <div className="col">

            <img src='https://st.depositphotos.com/1001378/1981/v/600/depositphotos_19816481-stock-illustration-open-envelope-with-notepad-sheet.jpg'  />
          </div> */}
            <div className="col">
              <Form>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                  <Form.Label>Your Message Here</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
