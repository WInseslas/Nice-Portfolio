/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaChevronDown, FaPhone, FaEnvelope, FaMapMarked, FaCalendarCheck } from 'react-icons/fa'



export default function SideBar() {

	const socialLinks = [
		{
			id: 1,
			icon: <FaGithub />,
			path: "https://github.com/WInseslas",
		},
		{
			id: 2,
			icon: <FaTwitter />,
			path: "https://twitter.com/",
		},
		{
			id: 3,
			icon: <FaLinkedinIn />,
			path: "https://www.linkedin.com/",
		},
	];

	const links = [
		{
			id: 1,
			child: (
				<>
					<div className="icon-box">
						<FaEnvelope />
					</div>

					<div className="contact-info">
						<p className="contact-title">Email</p>
						<a href="mailto:eyebejoel55@gmail.com" className="contact-link">eyebejoel55@gmail.com</a>
					</div>
				</>
			)
		},
		{
			id: 2,
			child: (
				<>
					<div className="icon-box">
						<FaPhone />
					</div>

					<div className="contact-info">
						<p className="contact-title">Phone</p>
						<a href="tel:+237672445181" className="contact-link">+237 672445181</a>
					</div>
				</>
			)
		},
		{
			id: 3,
			child: (
				<>
					<div className="icon-box">
						<FaCalendarCheck />
					</div>

					<div className="contact-info">
						<p className="contact-title">Birthday</p>
						<time dateTime="2002-08-08">August 08, 2002</time>
					</div>
				</>
			)
		},
		{
			id: 4,
			child: (
				<>
					<div className="icon-box">
						<FaMapMarked />
					</div>

					<div className="contact-info">
						<p className="contact-title">Location</p>
						<address>Dang, Ngaoundéré, Cameroon</address>
					</div>
				</>
			)
		}

	]

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let borderRadius;
	if (windowWidth < 1115 && windowWidth >= 580) {
		borderRadius = { borderRadius: 20 }
	} else {
		borderRadius = { borderRadius: 10 }
	}

	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	let submenu;
	if (active) {
		submenu = "sidebar active";
	} else {
		submenu = "sidebar";
	}

	return (
		<aside onClick={ handleClick } className={submenu} data-sidebar>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<img style={borderRadius}
						src="https://lh3.googleusercontent.com/a/AEdFTp7zCQm2neWscud86IMi_6m6jCEHoFV3ZtxU7Papng=s288-p-rw-no" alt="Eyebe Eloundou Joel Cedric" width="60" />
				</figure>

				<div className="info-content">
					<h1 className="name" title="Eyebe Eloundou Joel Cedric">Eyebe Eloundou <br />Joel Cedric</h1>
					<p className="title">Web developer</p>
				</div>

				<button className="info_more-btn" data-sidebar-btn>
					<span>Show Contacts</span>

					<div style={{ display: windowWidth > 576 ? 'none' : 'block' }}>
						<FaChevronDown />
					</div>

				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>
				<ul className="contacts-list">
					{( links.map( link => (
						<li key={link.id} className="contact-item">
							{link.child}
						</li>
					)))}
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					{(socialLinks.map(link => (
						<li key={link.id} className="social-item">
							<a className='social-link' href={link.path} target="_blank" rel="noreferrer" >{link.icon}</a>
						</li>
					)))}

				</ul>

			</div>

		</aside>
	)
}
