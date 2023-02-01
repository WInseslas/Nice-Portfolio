/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaChevronCircleDown, FaChevronCircleUp, FaEye } from "react-icons/fa";
import { categorys, projects} from "../helpers/portfolioData"

export default function Portfolio() {

	const [active, setActive] = useState(false);
	const [category, setCategory] = useState(1)
	const [currentProject, setCurrentProject] = useState(projects)

	const handleClick = () => {
		setActive(!active);
	};

	const handleCategory = (category) => {
		if (category.name !== "All") {
			setCurrentProject(projects.filter(p => p.category === category.name))
		} else {
			setCurrentProject(projects)
		}

		const btn = document.getElementsByClassName('select-value');
		btn[0].innerHTML = category.name;
	};

	return (
		<div>
			<article className='active'>
				<header>
					<h2 className="h2 article-title">Portfolio</h2>
				</header>

				<section className="projects">

					<ul className="filter-list">

						{categorys.map(item => (
							<li className="filter-item" key={item.id}>
								<button style={{ textTransform: "capitalize" }} onClick={() => { setCategory(item.id); handleCategory(item) }} className={`${(category === item.id ? "active" : "")}`} >{item.name}</button>
							</li>
						))}

					</ul>

					<div className="filter-select-box">

						<button className={active ? "filter-select active" : "filter-select"}>
							<div style={{ textTransform: "capitalize" }} className="select-value">Select category</div>
							<div className="select-icon">
								{active ? <FaChevronCircleUp className="ion-icon" onClick={handleClick} /> : <FaChevronCircleDown className="ion-icon" onClick={handleClick} />}
							</div>
						</button>
						{active && (<ul className="select-list">
							{categorys.map(category => (
								<li className="select-item" key={category.id}>
									<button onClick={() => { handleCategory(category) }}>{category.name}</button>
								</li>
							))}
						</ul>)}
					</div>

					<ul className="project-list">
						{currentProject.map(project => (
							<li className="project-item  active" key={project.id} >
								<a href="/">

									<figure className="project-img">
										<div className="project-item-icon-box">
											<FaEye className="ion-icon" />
										</div>

										<img src={project.src} alt={project.title} loading="lazy" />
									</figure>

									<h3 className="project-title" style={{ textTransform: "capitalize" }}>{project.title}</h3>

									<p className="project-category" style={{ textTransform: "capitalize" }}>{project.category}</p>

								</a>
							</li>
						))}

					</ul>

				</section>

			</article>
		</div>
	)
}
