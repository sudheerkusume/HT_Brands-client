import React, { useState } from 'react';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`https://htbrands-server.onrender.com/enquiries`, { name, mobile, email })
      .then(() => {
        alert("Your Enquiry Sent ✅");
        setName("");
        setMobile("");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Contact <span className="text-primary">Us</span></h1>
          <p className="text-muted">We’d love to hear from you. Our team is here to help.</p>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-4">Make a Request <span className='text-success'>...</span></h4>
            <form onSubmit={submitHandler}>
              <input
                name='name'
                value={name}
                placeholder='Full Name'
                className='form-control mb-3'
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                name='mobile'
                value={mobile}
                placeholder='Mobile Number'
                className='form-control mb-3'
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                name='email'
                type='email'
                value={email}
                placeholder='Email Address'
                className='form-control mb-3'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='submit'
                value='Send Enquiry'
                className='btn btn-success w-100'
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 text-center">
            <h4 className="mb-4">Reach Out to Us</h4>
            <p>Got a question about HT_Brand? Want to partner with us? Have feedback or just want to say hi? Contact us below.</p>

            <div className="mt-4">
              <p><FaPhone className="text-primary me-2" /> +91 98765 43210</p>
              <p><FaEnvelope className="text-primary me-2" /> contact@HT_Brand.com</p>
              <p><FaMapMarkerAlt className="text-primary me-2" /> Kakinada, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;