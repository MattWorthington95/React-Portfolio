import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backEndAPI from '../images/backEndAPI.png';
import frontEndProject from '../images/frontEndProject.png';

import '../styles/ReactCarousel.css';

function ReactCarousel() {
  return (
    <div className="carousel-container">
      <Carousel>
        <div className="image">
          <img src={backEndAPI} className="project" />
          <p className="legend">
            <b>BackEnd Review API</b>
            <br />
            <br />
            Git Repo:
            <a
              href="https://github.com/MattWorthington95/matt-worthington-games-be"
              target="_blank"
            >
              https://github.com/MattWorthington95/matt-worthington-games-be
            </a>{' '}
            <br />
            <br />
            Hosted API:{' '}
            <a
              href="https://matt-worthington-games.herokuapp.com/api"
              target="_blank"
            >
              https://matt-worthington-games.herokuapp.com/api
            </a>
            <br />
            <br />
            <p className="extra-p">
              Games review RESTful API built using Node.js, PostgreSQL /
              node-postgres, Jest <br /> The intention here was to mimic the
              building of a real world backend service (such as reddit) which
              will provide this information to the front end architecture
            </p>
          </p>
        </div>
        <div className="image">
          <img src={frontEndProject} className="project" />
          <p className="legend">
            <b>React Front-End Review Site </b> <br />
            <br /> Git Repo :{' '}
            <a
              href="https://github.com/MattWorthington95/matt-worthington-games-frontend"
              target="_blank"
            >
              https://github.com/MattWorthington95/matt-worthington-games-frontend
            </a>{' '}
            <br />
            <br />
            Hosted Website :{' '}
            <a
              href="https://matt-worthington-games-fe.herokuapp.com/"
              target="_blank"
            >
              https://matt-worthington-games-fe.herokuapp.com/
            </a>{' '}
            <br />
            <br />
            <p className="extra-p">
              The intention here was to build a fully interactive Frontend UI
              with React to take advantage of a Restful back API I built
              previously.{' '}
            </p>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
