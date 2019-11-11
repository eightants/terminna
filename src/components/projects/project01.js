import React, { Component } from 'react';
import marktplaats from '../../assets/projects/marktplaats-office.JPG';

class project01 extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">A Week at Marktplaats</h1>
                    <p data-aos="fade-up" data-aos-delay="150" class='tooltips'>Use 'cd projects' to return to the projects page. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-7 p-pad">
                    <img class="project-img" src={marktplaats}></img>
                    <p>
                        Marktplaats.nl is an online auction and classified advertising site based in the Netherlands. It is a subsidiary of the eBay Classifieds Group with around 1000 employees. The site provides a place for buyers and sellers to list their own items for sale, either new or used.
                    </p>
                    <p>
                        A pioneer in online classifieds, Marktplaats was founded in Emmeloord. The idea was to recycle castoffs and help customers find things they needed at reasonable prices. People loved the friendly community focus, and Marktplaats soon became the most popular e-commerce site in the Netherlands. 
                    </p>
                    <br></br>
                    <p>
                        <b>Activities</b>
                    </p>
                    <p>
                        The duration of this work experience was short, so every day was filled with workshops and projects.
                    </p>
                    <p>
                        I was introduced to the many roles in product and technology development. Software engineer, frontend and backend developer, data scientist, project manager, product analyst, etc. are all important jobs for the development of products. I also had the experience of working in some of these teams. 
                    </p>

                </div>
            </div>
        </div>
    );
  }
}

export default project01;
