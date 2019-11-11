import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4 spacemaker"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">Projects</h1>
                    <p data-aos="fade-up" data-aos-delay="100">Intriguing and purposeful projects. </p>
                    <p data-aos="fade-up" data-aos-delay="150" class='tooltips'>Use 'cat projectname' or click on the project to learn more. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="col-lg-8 project-grid">
                    <Link class="card-link" to="/projects/marktplaats">
                        <div className="card project-card">
                            <div className='card-img-top' id='project01'></div>
                            <h3>A Week at Marktplaats</h3>
                            <p class="tiny-name nomobile">marktplaats</p>
                            <p>Worked with product and technology teams and utilised the development process</p>
                        </div>
                    </Link>
                    <Link class="card-link" to="/projects/invoke">
                        <div className="card project-card">
                            <div className='card-img-top' id='project02'></div>
                            <h3>Invoke</h3>
                            <p class="tiny-name nomobile">invoke</p>
                            <p>TAMUHACK19. The One-Stop Invoice Accounting Solution for Small Businesses Everywhere</p>
                        </div>
                    </Link>
                    <Link class="card-link" to="/projects/tti">
                        <div data-aos="fade-up" data-aos-delay="200" className="card project-card">
                            <div className='card-img-top' id='project03'></div>
                            <h3>Web Development at TTI</h3>
                            <p class="tiny-name nomobile">tti</p>
                            <p>Implemented interactive web tools for a road mix calculator and a vegetation control search project. </p>
                        </div>
                    </Link>
                    <Link class="card-link" to="/projects/fullhouse">
                        <div data-aos="fade-up" data-aos-delay="200"className="card project-card">
                            <div className='card-img-top' id='project04'></div>
                            <h3>Full House</h3>
                            <p class="tiny-name nomobile">fullhouse</p>
                            <p>HackTX 2019. Communal inventory management for social service centers designed to reduce waste and give each community their specific needs. </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;
