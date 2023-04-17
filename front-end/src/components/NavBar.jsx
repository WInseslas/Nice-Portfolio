import React, {useState} from 'react'
import NavLinks from "./NavLinks"
import {linksItems} from '../helpers/navbarData'

export default function NavBar() {
	const [current, setCurrent] = useState(1)
	return (
		<nav className="navbar">
			<ul className="navbar-list">

				{(linksItems.map((link) => (
					<li className="navbar-item" key={link.id} onClick={() => setCurrent(link.id)}>
						<NavLinks link={link} current={current}/>
					</li>
				)))}
			</ul>
		</nav>
	)
}