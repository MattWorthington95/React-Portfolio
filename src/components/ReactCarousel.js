import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headshot from ".././images/me-orange.png";
import project from ".././images/project-management-I.jpg";

import "../styles/ReactCarousel.css";

function ReactCarousel() {
  return (
    <div className="carousel-container">
      <Carousel>
        <div className="image">
          <img src={project} className="project" />
          <p className="legend">
            <b>BackEnd News API</b>
            <br />
            <br />
            Build a back end project using node express. Tested with Jest. CI/Cd
            with git hub actions
          </p>
        </div>
        <div className="image">
          <img src={project} className="project" />
          <p className="legend">Project 2</p>
        </div>
        <div className="image">
          <img src={project} className="project" />
          <p className="legend">Project 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
