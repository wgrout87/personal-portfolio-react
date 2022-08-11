import React, { useEffect } from "react";
import emailjs from "emailjs-com";

const { REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, REACT_APP_YOUR_PUBLIC_KEY } = process.env;

function Contact() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 20%';
        document.getElementById('clouds').style.backgroundPosition = '0% 30%';
        document.getElementById('hills').style.backgroundPosition = '0% 40%';
        document.getElementById('me').style.backgroundPosition = '0% -50%';
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, e.target, REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className="container flex-row text-light transition" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-sm-12 col-xl-6" />
            <div className="col-sm-12 col-xl-6 my-5 p-3 bg-primary rounded-corners">
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