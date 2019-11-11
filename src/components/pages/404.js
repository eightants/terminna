import React, { Component } from 'react';

class My404 extends Component {
  render() {
    return (
      <div className="px-10 content">
      <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 title">
              <h1 data-aos="fade-up">Error</h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-lg-7 p-pad">
              <p>
                  This page was not found. 
              </p>
              <p className="tooltips">If you're looking for a page, try 'cd pagename'. 
              <br></br>If you're looking for a project, try 'cat projectname'</p>
          </div>
      </div>
  </div>
    );
  }
}

export default My404;
