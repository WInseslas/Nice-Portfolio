import { FaGithub, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarked, FaCalendarCheck } from 'react-icons/fa'

export const socialLinksItems = [
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
export const contactItems = [
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