/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { TbSend } from "react-icons/tb";


export default function Contact() {
	return (
		<article className="active">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="mapbox">
				<figure>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126647.51306957271!2d13.503805598498406!3d7.270991652548251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f002a1b3347f77%3A0xb76e1e45f85da88c!2sFrom%20Ngaoundere%20University!5e0!3m2!1sen!2sus!4v1674658551545!5m2!1sen!2sus"
						width="600"
						height="300"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</figure>
			</section>

			<section className="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>
				<form action="#" className="form">
					<div className="input-wrapper">
						<input type="text" name="fullname" className="form-input" placeholder="Full name" required  />

						<input type="email" name="email" className="form-input" placeholder="Email address" required  />
					</div>

					<textarea name="message" className="form-input" placeholder="Your Message" required ></textarea>

					<button className="form-btn" type="submit">
						<TbSend className='ion-icon' />
						<span>Send Message</span>
					</button>

				</form>
			</section>
		</article>
	)
}
