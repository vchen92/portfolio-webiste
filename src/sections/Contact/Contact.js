import React from 'react';
import CustomButton from './../../components/UI/CustomButton/CustomButton';
import './Contact.css';

const email = 'vince.chen92@gmail.com';

function Contact() {
	const onClick = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<div className="contact section">
			<div className="contact__heading">04. What's Next?</div>
			<div className="contact__title">Get In Touch</div>
			<div className="contact__text">
				I'm currently looking for any new opportunities, my inbox is
				always open. Whether you have a question or just want to say hi,
				I'll try my best to get back to you!
			</div>
			<CustomButton onClick={onClick} large>
				Say Hello
			</CustomButton>
		</div>
	);
}

export default Contact;
