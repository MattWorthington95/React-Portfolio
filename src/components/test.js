import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div>
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
      <div style={{ background: "orange", height: 100, margin: 10 }} />
    </div>
  );
};

export default Test;

// const [projectPosition, setProjectPosition] = useState();
//   const [currentSection, setCurrentSection] = useState("");
//   const prevScrollY = useRef(0);

//   const [goingUp, setGoingUp] = useState(false);
//   console.log(projectPosition);
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       console.log(currentScrollY, projectPosition);

//       if (prevScrollY.current < currentScrollY && goingUp) {
//         setGoingUp(false);
//         if (currentScrollY > projectPosition) {
//           setCurrentSection("project");
//         }
//       }
//       if (prevScrollY.current > currentScrollY && !goingUp) {
//         setGoingUp(true);
//         if (currentScrollY > projectPosition) {
//           setCurrentSection("project");
//         }
//       }

//       prevScrollY.current = currentScrollY;
//       // console.log(goingUp, currentScrollY);
//       // console.log(projectPosition, currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [goingUp]);

//   console.log(currentSection, "<<<<<<<");

// const myRef = useRef();
// useEffect(() => {
//   setProjectPosition(window.pageYOffset);
//   console.log();
//   console.log(projectPosition, "<<<<<<<<<<<<");
//   setProjectPosition(myRef.current.getBoundingClientRect().top);
// }, []);

// const [inView, setInView] = useState(false);
// const currentScroll = window.scrollY;

// const ref = useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       setSticky(ref.current.getBoundingClientRect().top <= 0);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", () => handleScroll);
//     };
//   }, []);

//   console.log(currentSection);
