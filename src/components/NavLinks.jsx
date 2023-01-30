import React from "react";
import { Link } from 'react-router-dom'

const NavLinks = ({ link }) => {
    let isActive = false;
    // if (link.path !== link.name) {
    //     isActive = true;
    // }
    return (
        <Link style={{ textTransform: "capitalize" }} to={link.path} className={isActive ? "navbar-link active" : "navbar-link"} >
            {(link.name)}
        </Link>
    );
};

export default NavLinks;