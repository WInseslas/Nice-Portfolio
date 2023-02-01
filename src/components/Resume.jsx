import React from 'react'
import { RiBookOpenLine } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'
import { education, experience, skillsItems } from '../helpers/resumeData'

export default function Resume() {
    return (
        <article className='active'>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <MdOutlineWork className="ion-icon" />
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    {experience.map(exp => (
                        <li className="timeline-item" key={exp.id}>
                            <h4 className="h4 timeline-item-title">{exp.title}</h4>
                            <span>{exp.year}</span>
                            <p className="timeline-text">{exp.describe}</p>
                        </li>
                    ))}

                </ol>

            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <RiBookOpenLine className='ion-icon' />
                    </div>

                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    {education.map((education) => (
                        <li className="timeline-item" key={education.id}>

                            <h4 className="h4 timeline-item-title">{education.title}</h4>

                            <span>{education.year}</span>

                            <p className="timeline-text">{education.describe}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="skill">

                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">
                    {skillsItems.map(item => (
                        <li className="skills-item" key={item.id}>

                            <div className="title-wrapper">
                                <h5 className="h5">{item.name}</h5>
                                <data value={item.progress}>{item.progress}</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: item.progress }}></div>
                            </div>

                        </li>

                    ))}
                </ul>

            </section>

        </article>
    )
}
