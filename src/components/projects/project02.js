import React, { Component } from 'react';
import invokem from '../../assets/projects/tamuhack.jpg';

class project02 extends Component {
  render() {
    return (
        <div className="px-10 content">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-3 title">
                    <h1 data-aos="fade-up">Invoke</h1>
                    <p data-aos="fade-up" data-aos-delay="150" class='tooltips'>Use 'cd projects' to return to the projects page. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-lg-7 p-pad">
                    <img class="project-img" src={invokem}></img>
                    <p>
                        Bottled water, snacks and energy drinks define a hackathon. If you plan to stay awake for 24 hours, you are bound to need them sooner or later. However, hackathons aren't just all free swag and tired coders. They also provide an environment for great ideas to materialize. 
                    </p>
                    <p>
                        I took part in TAMUhack 2019, my first college level hackathon, with a couple friends. I gained a lot of experience in the process of creation by working with others and presenting a product. 
                    </p>
                    <br></br>
                    <p>
                        <b>How it works</b>
                    </p>
                    <p>
                        Invoke really starts with our multi-platform capable phone app written in Ionic 3, which gives the user a simple, yet sleek UI from which they may take photos and submit them for processing. 
                    </p>
                    <p>
                        This processing begins with the image being sent to Microsoft Cognitive Services's OCR Computer Vision, from which we get the raw JSON data and text of the invoice. This data is then handed securely off to your computer, with the help of Google Firebase and the Google Cloud API, at which point, a native python application takes in this raw data, gathering the pertinent portions of each invoice. Then the data from all past-and-current invoices is used to generate useful graphs and charts, with the help of the "matplotlib" and "pandas" python libraries. 
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default project02;
