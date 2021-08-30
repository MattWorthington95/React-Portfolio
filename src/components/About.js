import Navbar from "./Navbar";
import "../styles/About.css";
import { useRef, useEffect } from "react";
import headshot from ".././images/me-orange.png";

const About = ({ currentSectionInView, setSectionPositions }) => {
  const myRef = useRef();
  useEffect(() => {
    setSectionPositions((currentPositions) => {
      const currentPositionsCopy = { ...currentPositions };
      currentPositionsCopy.about = {
        top: myRef.current.getBoundingClientRect().top,
        bottom: myRef.current.getBoundingClientRect().bottom,
      };
      return currentPositionsCopy;
    });
  }, []);
  return (
    <div className="about" id="About" ref={myRef}>
      <Navbar currentSectionInView={currentSectionInView} />

      <div className="about-content">
        <div className="info">
          <h2 id="about-me-h2">About Me</h2>
          <p>
            Hello, My name is <b>Matt Worthington</b> and I am a{" "}
            <b>FullStack Developer.</b> <br /> <br />I became a software
            developer because I genuinely love to learn. I'm currently studying
            with <b> Northcoders coding bootcamp</b> in addition to a part time{" "}
            <b> BSc (Honours) Computing and IT (Software) degree.</b> <br />
            <br />I am actively looking for an opportunity to work in the right
            environment that will help me progress into a full-stack role and
            help me fulfil my potential.
          </p>

          <h2 className="tech-stack">
            <b> Tech Stack:</b> <br />
          </h2>
          <p>
            <b>
              Node, &nbsp;React,&nbsp; Javascript, &nbsp;HTML, &nbsp;CSS,
              &nbsp;Express, &nbsp;Bootstrap, &nbsp;PostgreSQL, &nbsp;Jest,
              &nbsp;Github Actions
            </b>
          </p>
        </div>
        <div className="headshot">
          <img src={headshot} alt="headshot of matt worthington" />
        </div>
      </div>
    </div>
  );
};

export default About;
// <div class="info">
//             <h2>About Me</h2>
//             <p>Hello, My name is <b>Matt Worthington.</b> I am a Front end Dev with a passion for all things Javascript.
//                 Im currently studying a part time <b>BSc (Honours) Computing and IT (Software) degree</b> while also
//                 working on personal projects with the aim of becoming a <b>Junior Web Developer.</b> <br><br>
//                 Why Development? Simply put, I love to learn. The fact that every time I sit down and code makes me a
//                 better Developer than the day before, inspires me.
//                 <br>

//             </p>
//             <br>
//             <p class="tech"><b>Tech Stack:</b></p>
//             <p><b>HTML, CSS, SASS, Bootstrap, PHP, Javascript</b></p>
//         </div>
//         <div class="headshot-container">
//             <img class="headshot" src="src/images/me-orange.png" alt="">
//         </div>
