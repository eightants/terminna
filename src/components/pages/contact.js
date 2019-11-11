import React, { Component } from 'react';

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
          </div>
      </div>
  </div>
    );
  }
}

export default Contact;
