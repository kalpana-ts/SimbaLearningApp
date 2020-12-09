import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
            <img className="logo" src="/images/Simba-ICON.png" alt="logo"/>
        </a>
        <p className="nav-simba-title">
            <span className="title-name">SIMBA</span><br/>
            <span className="title-slogan">The Lion King (Learning App)</span>
        </p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Assignement
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/assignmentPost/" className="dropdown-item">
                        List of Assignment
                    </Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Announcement
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/announce" className="dropdown-item">
                        Posted Announcement
                    </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <Link exact to="/messages" className="nav-link" activeClassName="active-link">
                    Messages
                    </Link>
                </li>

                <li className="nav-item">
                    <Link exact to="/quizs" className="nav-link" activeClassName="active-link">
                    Quiz
                    </Link>
                </li>

                
                <li className="nav-item">

                </li>              
                <li className="nav-item">
                    <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>LogOut</button>
                </li>
            </ul>  
        </div>
    </nav>
    );
}

export default Navbar;
