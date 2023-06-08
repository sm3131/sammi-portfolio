import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [nameState, setNameState] = useState('');

    const [emailState, setEmailState] = useState('');

    const [messageState, setMessageState] = useState('');

    const name = nameState;

    const email = emailState;

    const message = messageState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleBlur(e) {

        if (e.target.name === 'Email' && !e.target.value.length) {
            
            setErrorMessage(`${e.target.name} is required.`);
        } else if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(nameState);
        console.log(emailState);
        console.log(messageState); 

        setNameState('');
        setEmailState('');
        setMessageState('');        
    }

    return (
        <section>
            <h1 className="contact-head">Contact Me</h1>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div>
                        <p className="error-text text-danger">{errorMessage}</p>
                    </div>
                )}
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control form-box1" value={name} onChange={e => setNameState(e.target.value)} onBlur={handleBlur} name="Name" placeholder="Enter Your Name" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" value={email} onChange={e => setEmailState(e.target.value)} onBlur={handleBlur} name="Email" className="form-control form-box1" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="message">Message:</label>
                    <textarea name="Message" value={message} onChange={e => setMessageState(e.target.value)} onBlur={handleBlur} className="form-control form-box2" rows="5" />
                </div>
                <button type="submit" disabled={!name || !email || !message} className="btn btn-primary mb-3">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
