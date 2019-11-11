import React, { Component } from 'react';
import tti from '../../assets/projects/tti.jpg';

class project03 extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">Web Development at TTI</h1>
                    <p data-aos="fade-up" data-aos-delay="150" class='tooltips'>Use 'cd projects' to return to the projects page. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-7 p-pad">
                    <img class="project-img" src={tti}></img>
                    <p>
                        I took on a web developer role at the Texas A&M Transportation Institute (TTI) during the summer of 2019. My main 
                        responsibilities in the role were to develop interactive tools on the websites of two research projects concerning roadside 
                        vegetation. TTI works on research very closely related to civil engineering, and the projects I was responsible for were no different. 
                    </p>
                    <p>
                        A week into the first project, I was assigned a new <a href="https://github.com/eightants/NCHRP-14-41" class="social">project</a>. My supervisor wanted an interactive tool that would recommend roadside vegetation control methods using the criteria selected by the user. The tool would read from a relational database with responsive dropdown choices.
                    </p>
                    <p>
                        This experience gave me full confidence in working with HTML/CSS and Javascript. The exposure to many Javascript frameworks and libraries like jQuery, React, and jsPDF helped me understand how to work with any new Javascript tool. 
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default project03;
