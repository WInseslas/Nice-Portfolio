import React from "react";
import { Link } from 'react-router-dom'

const NavLinks = ({ link, current }) => {
    return (
        <Link style={{ textTransform: "capitalize" }} to={link.path} className={(link.id === current) ? "navbar-link active" : "navbar-link"} >
            {(link.name)}
        </Link>
    );
};

export default NavLinks;