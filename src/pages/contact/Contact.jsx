import React, { useState } from 'react';
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./Contact.css";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(name, email, message);
  };

  return (
    // <div className="App">
    //   <h1 className="contact-title">Contact Us</h1>
    //   <form id="contact-form" onSubmit={handleSubmit} method="POST">
    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email address</label>
    //       <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="message">Message</label>
    //       <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>
    // </div>

<div className="Home">
<Container>
  <Row>
    <Col size="md-12">

    <h1 className="contact-title">Contact Us</h1>
    <p>One step closer to your dream ride! Send us your details below and we'll be in touch in 24 hours to arrange payment and pickup.</p>
    <p>Happy Motoring!</p>
    </Col>
  </Row>
  <Row>
    <Col size="md-12">
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Col>
  </Row>
</Container>
</div>


  );
}

export default Contact;


