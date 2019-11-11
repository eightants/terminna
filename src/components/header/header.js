import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand px-10 mx-0 col-lg-4 nomobile" to="/">Anthony Teo</Link>
                    <ul className="navbar-nav px-8 col-lg-8 justify-content-end">
                        <li className="nav-item px-2"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item px-2"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item px-2"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item px-2"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;
