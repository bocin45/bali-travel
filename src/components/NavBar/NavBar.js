import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {


    return (<>
        <div className="tm-main-content" id="top">
            <div className="tm-top-bar-bg"></div>
            <div className="tm-top-bar" id="tm-top-bar">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg narbar-light">
                            <a className="navbar-brand mr-auto" href="#">
                                <img src={require('../../images/logo.png')} alt="Site logo" />
                                Journey
                            </a>
                            <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                        {/* <a className="nav-link active" href="#top">Home <span className="sr-only">(current)</span></a> */}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#tm-section-2">Destination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#tm-section-3">Accomodation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#tm-section-4">Contact Us</a>
                                    </li>
                                    <li>
                                        <Link to="/about" className="nav-link">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default NavBar;