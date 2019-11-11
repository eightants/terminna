import React, { Component } from 'react';
import coding from "../../assets/coding.svg"

class Home extends Component {
  render() {
    return (
        <div>
          <div className="px-10 anchor col-lg-7">
              <h1 data-aos="fade-up" className='anchor-txt'>Hi.</h1>
              <h2 data-aos="fade-up" data-aos-delay="200" className="px-2">
                I'm Anthony. I'm a developer with an interest in the digital experience. 
              </h2>
              <p data-aos="fade-up" data-aos-delay="300" class="px-2 tooltips">Type 'cd pagename' in the prompt to start navigating, or use the links on the top right. Try it out with 'cd projects'</p>
          </div>
          <div>
            <img data-aos="fade-up" data-aos-delay="400" class="greyfilter col-lg-5 anchor-img px-10" src={coding}></img>
          </div>
        </div>
    );
  }
}

export default Home;
