/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { socialLinksItems, contactItems } from '../helpers/aboutData';



export default function SideBar() {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

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

	let submenu;
	if (active) {
		submenu = "sidebar active";
	} else {
		submenu = "sidebar";
	}

	return (
		<aside onClick={ handleClick } className={submenu} >
			<div className="sidebar-info">
				<figure className="avatar-box">
					<img style={borderRadius}
						src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png" alt="John Doe" width="60" />
				</figure>

				<div className="info-content">
					<h1 className="name" title="John Doe">John Doe<br /></h1>
					<p className="title">Web developer</p>
				</div>

				<button className="info_more-btn">
					<span>Show Contacts</span>

					<div style={{ display: windowWidth > 576 ? 'none' : 'block' }}>
						<FaChevronDown className='icon-icon' />
					</div>

				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>
				<ul className="contacts-list">
					{( contactItems.map( link => (
						<li key={link.id} className="contact-item">
							{link.child}
						</li>
					)))}
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					{(socialLinksItems.map(link => (
						<li key={link.id} className="social-item">
							<a className='social-link' href={link.path} target="_blank" rel="noreferrer" >{link.icon}</a>
						</li>
					)))}
				</ul>

			</div>

		</aside>
	)
}
