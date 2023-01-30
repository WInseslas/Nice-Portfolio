/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Contact(className = "contact") {
	return (
		<article class="contact active" data-page="contact">
			<header>
				<h2 class="h2 article-title">Contact</h2>
			</header>

			<section class="mapbox" data-mapbox>
				<figure>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126647.51306957271!2d13.503805598498406!3d7.270991652548251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f002a1b3347f77%3A0xb76e1e45f85da88c!2sFrom%20Ngaoundere%20University!5e0!3m2!1sen!2sus!4v1674658551545!5m2!1sen!2sus"
						width="600"
						height="300"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</figure>
			</section>

			<section class="contact-form">
				<h3 class="h3 form-title">Contact Form</h3>
				<form action="#" class="form" data-form>
					<div class="input-wrapper">
						<input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input />

						<input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input />
					</div>

					<textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>

					<button class="form-btn" type="submit" disabled data-form-btn>
						<ion-icon name="paper-plane"></ion-icon>
						<span>Send Message</span>
					</button>

				</form>
			</section>
		</article>
	)
}
