import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const initialState = { name: '', email: '', message: '' };

    const [formState, setFormState] = useState(initialState);

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'Email') {
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
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );        
        document.querySelector("textarea").value = ""
        setFormState(initialState);
    }

    return (
        <section>
            <h1 className="contact-head">Contact me</h1>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div>
                        <p className="error-text text-danger">{errorMessage}</p>
                    </div>
                )}
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control w-25" defaultValue={name} onBlur={handleChange} name="name" placeholder="Enter Your Name" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="form-control w-25" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} className="form-control w-50" rows="5" />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
