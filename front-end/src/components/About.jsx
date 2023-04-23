import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'


export default function About() {
    const [container, setContainer] = useState("modal-container")
    const [overlay, setOverlay] = useState("overlay")
    const isSchow = false
    const [testimonial, setTestimonial] = useState([]);

    const handleSchow = (isSchow, testi) => {
        if (!isSchow) {
            setContainer("modal-container active")
            setOverlay("overlay active")
            setTestimonial(testi)
        } else {
            setContainer("modal-container")
            setOverlay("overlay")
        }
    }

    const testimonials = [
        {
            id: 1,
            title: "Daniel lewis",
            src: "https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/avatar-1.png?raw=true",
            describe: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
        },
        {
            id: 2,
            title: "Jessica miller",
            src: "https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/avatar-2.png?raw=true",
            describe: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
        },
        {
            id: 3,
            title: "Emily evans",
            src: "https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/avatar-3.png?raw=true",
            describe: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
        },
        {
            id: 4,
            title: "Henry William",
            src: "https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/avatar-4.png?raw=true",
            describe: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
        }
    ]
    return (
        <article className='active'>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy
                    turning complex problems into simple, beautiful and intuitive designs.
                </p>

                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>


            {/* service */}
            <section className="service">

                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src="https://raw.githubusercontent.com/WInseslas/Nice-Portfolio/0ff920b2776dbb9aa0178f5c187f78caf91565b9/src/assets/images/icon-design.svg" alt="Web design icon" width={40} />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>

                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>

                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="https://raw.githubusercontent.com/WInseslas/Nice-Portfolio/0ff920b2776dbb9aa0178f5c187f78caf91565b9/src/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>

                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </li>

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src="https://raw.githubusercontent.com/WInseslas/Nice-Portfolio/0ff920b2776dbb9aa0178f5c187f78caf91565b9/src/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>

                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>

                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="https://raw.githubusercontent.com/WInseslas/Nice-Portfolio/0ff920b2776dbb9aa0178f5c187f78caf91565b9/src/assets/images/icon-photo.svg" alt="camera icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>

                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>


            {/* testimonials */}
            <section className="testimonials">

                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((testimonial) => (
                        <li className="testimonials-item" key={testimonial.id} onClick={() => { handleSchow(isSchow, testimonial) }}>
                            <div className="content-card" >
                                <figure className="testimonials-avatar-box">
                                    <img src={testimonial.src} alt={testimonial.title} width="60" />
                                </figure>
                                <h4 className="h4 testimonials-item-title" >{testimonial.title}</h4>

                                <div className="testimonials-text" style={{ textAlign: "justify"}}>
                                    <p>
                                        {testimonial.describe}
                                    </p>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </section>


            {/* testimonials modal */}
            {(!isSchow && 
                <div className={container}>
                    <div className={overlay}></div>

                    <section className="testimonials-modal">
                        <button className="modal-close-btn" onClick={() => handleSchow(!isSchow)}>
                            <AiFillCloseCircle className='ion-icon' />
                        </button>

                        <div className="modal-img-wrapper">
                            <figure className="modal-avatar-box">
                                <img src={testimonial.src} alt={testimonial.title} width="80" data-modal-img />
                            </figure>

                            <img src="https://raw.githubusercontent.com/WInseslas/Nice-Portfolio/0ff920b2776dbb9aa0178f5c187f78caf91565b9/src/assets/images/icon-quote.svg" alt="quote icon" />
                        </div>

                        <div className="modal-content">

                            <h4 className="h3 modal-title" >{testimonial.title}</h4>

                            <time dateTime="2021-06-14">14 June, 2021</time>

                            <div>
                                <p style={{ textAlign: "justify"}}>{testimonial.describe}</p>
                            </div>

                        </div>

                    </section>

                </div>
            )}


            {/* clients */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-1-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-2-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-3-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-4-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-5-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="/">
                            <img src="https://github.com/WInseslas/Nice-Portfolio/blob/main/front-end/src/assets/images/logo-6-color.png?raw=true" alt="client logo" />
                        </a>
                    </li>

                </ul>

            </section>

        </article >
    )
}
