import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="is-active1" exact = {true}>
                Users
            </NavLink>
            <NavLink to="/createuser" activeClassName="is-active">
                Create User
                </NavLink>
            
            
        </div>
    );
};

export default Header;