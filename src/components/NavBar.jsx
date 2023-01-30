import React from 'react'
import NavLinks from "./NavLinks"

export default function NavBar() {

	const links = [
		{
			id: 1,
			path: "about",
			name: "about",
		},
		{
			id: 2,
			path: "resume",
			name: "resume",
		},
		{
			id: 3,
			path: "portfolio",
			name: "portfolio",
		},
		{
			id: 4,
			path: "blog",
			name: "blog",
		},
		{
			id: 5,
			path: "contact",
			name: "contact",
		},
		
	]

	return (
		<nav className="navbar">
			<ul className="navbar-list">

				{(links.map((link) => (
					<li className="navbar-item" key={link.id}>
						<NavLinks link={link} />
					</li>
				)))}

			</ul>

		</nav>
	)
}
