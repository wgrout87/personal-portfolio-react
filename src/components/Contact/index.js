import React, { useEffect } from "react";
import emailjs from "emailjs-com";

function Contact() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 20%';
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container flex-row text-light">
            <div className="col-12 col-xl-6" />
            <div className="col-12 col-xl-6 mt-5 p-3 bg-primary">
                <h2>Contact Me</h2>
                <form className="flex-row" onSubmit={sendEmail} method="POST">
                    <label htmlFor="name">Name</label>
                    <input className="form-input col-12" type="text" name="name" required />
                    <label htmlFor="email">Email Address</label>
                    <input className="form-input col-12" type="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea rows='8' className="form-textarea col-12" type="text" name="message" required />
                    <button className="btn pill px-5 mx-auto" type="submit">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;