import React, { Component } from 'react';
import contactimg from "../../assets/contactimg.svg"

class Contact extends Component {
  render() {
    return (
      <div className="px-10 content">
      <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-3 title">
              <h1 data-aos="fade-up">Contact</h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-lg-8 p-pad">
              <p>
                Get in touch!
                <br/><br/>
                <a href='mailto:anthonyteo@tamu.edu'>Email</a>
                <br/>
                <a href='https://www.linkedin.com/in/anthonyteo/'>LinkedIn</a>
                <br/>
                <a href='https://github.com/eightants'>Github</a>
              </p>
              <br></br>
              <img class="project-img col-lg-5 px-10 greyfilter" src={contactimg}></img>
          </div>
      </div>
  </div>
    );
  }
}

export default Contact;
