import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4 spacemaker"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">About</h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                        Design Director @ TAMUhack
                        <br></br>
                        Web Developer @ CYPRES
                        <br></br>
                        Researcher @ DATA Lab
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-8 p-pad">
                    <div class="center"><img id="pfp" src="https://anthonyteo.com/images/pfp2.jpg"></img></div>
                    <p>
                        Hi, I'm Anthony. I'm a Computer Science student at Texas A&M University. I've spent most of my academic career in 
                        The Netherlands and am currently living in the United States. This website is a collection of my projects and 
                        interests.
                    </p>
                    <p>
                        I am passionate about the process of creation and aim to provide a satisfying digital experience. I work a lot 
                        with HTML/CSS, JavaScript, Python, and C++ for programming, but I also like to experiment with different 
                        development tools. During my free time, I enjoy composing music on my piano. Occasionally you can also find me 
                        taking photos, watching Formula 1 or playing football.
                    </p>
                    <p>
                        I am currently a director at TAMUhack organizing hackathons and educating students about technology. I'm also 
                        working as a website manager for the Cyber Physical Resilient Energy Systems (CYPRES) project at Texas A&M. In 
                        addition to that, I am exploring machine learning and data science as a student researcher for DATA Lab.
                    </p>
                    <p>
                        Having already moved around the world multiple times, I don't know what the future will bring. Nonetheless, I 
                        plan to keep working on meaningful projects during my time in college and make a few dents in the universe along 
                        the way!
                    </p>
                    <br></br>
                    <p>
                        <b>Tools</b>
                        <br></br>
                        Python, C++, HTML, CSS, JavaScript, jQuery, React.js, Git
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
