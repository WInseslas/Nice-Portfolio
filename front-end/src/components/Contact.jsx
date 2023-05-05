/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { TbSend } from 'react-icons/tb';

export default function Contact() {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('')


	const handleFullnameChange = (event) => {
		setFullname(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubjectChange = (event) => {
		setSubject(event.target.value);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!fullname || !email || !message) {
			setErrorMessage('Please fill in all fields');
			return;
		}

		if (!/\S+@\S+\.\S+/.test(email)) {
			setErrorMessage('Please enter a valid email address');
			return;
		}
		try {
			const response = await fetch('http://127.0.0.1:3030/api/message/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: fullname,
					email: email,
					subject: subject,
					message: message
				})
			});

			const responseJson = await response.json();

			if (!response.ok) {
				console.log(responseJson.data.message)
				if (response.status === 400) {
					throw new Error(responseJson.message);
				} else if (response.status === 404) {
					throw new Error(responseJson.message);
				} else if (response.status === 500) {
					throw new Error(responseJson.message);
				} else {
					throw new Error('Login failed');
				}
			} else if (response.status === 201) {
				setEmail("")
				setFullname("")
				setEmail("")
				setSubject("")
				setMessage("")
				setSuccessMessage("Thank you very much for your message! We have received your request and will respond as soon as possible.")
			} else {
				throw new Error('An error has occurred');
			}
		} catch (error) {
			setErrorMessage(error.message);
		}
	}
	return (
		<article className="active">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="mapbox">
				<figure>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126647.51306957271!2d13.503805598498406!3d7.270991652548251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f002a1b3347f77%3A0xb76e1e45f85da88c!2sFrom%20Ngaoundere%20University!5e0!3m2!1sen!2sus!4v1674658551545!5m2!1sen!2sus"
						width="600"
						height="300"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</figure>
			</section>

			<section className="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>
				<form onSubmit={handleSubmit} className="form">
					<div className="input-wrapper">
						<input
							type="text"
							name="fullname"
							className="form-input"
							placeholder="Full name"
							required
							value={fullname}
							onChange={handleFullnameChange}
						/>

						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="Email address"
							required
							value={email}
							onChange={handleEmailChange}
						/>
					</div>

					<input
						style={{ marginBottom: "20px" }}
						name="subject"
						className="form-input"
						placeholder="Subject"
						required
						value={subject}
						onChange={handleSubjectChange}
					/>


					<textarea
						name="message"
						className="form-input"
						placeholder="Your Message"
						required
						value={message}
						onChange={handleMessageChange}
					></textarea>

					{errorMessage && <p style={{ textAlign: "center", marginBottom: "20px", color: "red" }}>{errorMessage}</p>}
					{successMessage && <p style={{ textAlign: "center", marginBottom: "20px", color: "green" }} >{successMessage}</p>}
					<button className="form-btn"
						type="submit"
						disabled={!fullname || !email || !subject || !message}>
						<TbSend className="ion-icon" />
						<span>Send Message</span>
					</button>
				</form>
			</section>
		</article>
	);
}
