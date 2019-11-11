import React, { Component } from 'react';
import fh from '../../assets/projects/fullhouse1.png';

class project04 extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">Full House</h1>
                    <p data-aos="fade-up" data-aos-delay="150" class='tooltips'>Use 'cd projects' to return to the projects page. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-7 p-pad">
                    <img class="project-img" src={fh}></img>
                    <p>
                        In addition to being able to improve my UI/UX design and frontend development skills, 
                        my team took first place in the PwC Sponsor Challenge at HackTX 2019 with our project <a href="https://github.com/eightants/fullhouse">Full House</a>.  
                    </p>
                    <p>
                        Full House has two main functions. First, to help shelters manage their inventory by determining scarcity or surplus. And second, to connect shelters with others that may have the supplies that they need. Full House accomplishes this with a search tool that lets users easily query the inventory, and with a dashboard that recommends other shelters.
                    </p>
                    <p>
                    The core of our product is connecting shelters together based on need. In order to get our data, we scraped Goodwill stores for product information, formatted them to be stored in our Mongo DB database, and kept track of their specific categories. With a set of categories, we could easily show what percentage of a shelter's inventory is made of a certain category, and allow shelters to specify what percentage they require. With this in hand, we could match shelters together based on their respective surpluses and shortages. 
                    </p>
                    <p>
                    The website itself is a Node.js web server, with a React based front-end. We designed the site to emphasize simplicity and to showcase the surplus/scarcity percentages the best. The whole web app is hosted on Microsoft Azure with a Continuous Deployment workflow through GitHub Actions. 
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default project04;
