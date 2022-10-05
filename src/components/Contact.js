import './components.css';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


 function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username  and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Oh no! Your email address is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!name.length) {
      setErrorMessage(
        `Oops! You forgot to add your name.`
      );
      return;
    }
    if (!message.length) {
      setErrorMessage(
        `Looks like you didn't add a message!`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
    setName('');
    setEmail('');
  };

  return (
    <div className ="">
      <h3>Lets Connect!</h3>
      <form className ="contact d-flex flex-column justify-content-center">
      <div className ="w-50 p-2">   
        <input className ="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        />
        </div>
      <div className ="w-50 p-2">
        <input className ="form-control" 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"  
        />
      </div>
        <div className ="w-50 p-2">
        <input className ="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        </div>
        <button type="button" className="btn btn-secondary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;