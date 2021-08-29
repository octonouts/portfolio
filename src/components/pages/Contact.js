import React, { useState } from 'react';
import '../styles/Contact.css';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setUserEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      if (inputValue === "") {
        setErrorMessage('Email cannot be empty!')
      }
    } else if (inputType === 'userName') {
      if (inputValue === "") {
        setErrorMessage('Name cannot be empty!')
      }
    } else {
        if (inputValue === "") {
          setErrorMessage('Message cannot be empty!')
      }
    }
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(userEmail) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    
    // alert(`Hello ${userName}`);

    setUserName('');
    setUserEmail('');
    setUserMessage('');
    setErrorMessage('');
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form className="form">
        <input
          value={userEmail}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          value={userMessage}
          name="userMessage"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter a message"
          required
        />
        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;