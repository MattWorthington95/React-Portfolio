import React from 'react';
import '../styles/Contact.css';
import { useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Contact({ setSectionPositions }) {
  const myRef = useRef();
  useEffect(() => {
    setSectionPositions((currentPositions) => {
      const currentPositionsCopy = { ...currentPositions };
      currentPositionsCopy.contact = {
        top: myRef.current.getBoundingClientRect().top,
        bottom: myRef.current.getBoundingClientRect().bottom,
      };
      return currentPositionsCopy;
    });
  }, []);
  return (
    <div className="Contact" ref={myRef}>
      <div className="filler"></div>
      <h3>
        {' '}
        <a href="https://www.linkedin.com/in/matt-worthington/" target="blank">
          <FaLinkedin size={100} />
        </a>
        <a href="https://github.com/MattWorthington95" target="blank">
          <FaGithub size={100} />
        </a>
      </h3>
    </div>
  );
}

export default Contact;
