import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { Fragment, useState, useEffect, useRef } from "react";

const NavBar = ({ currentSectionInView }) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <header className="sticky-inner navbar">
          <div
            className="navbar__item"
            onClick={() => {
              scroll.scrollToTop({
                activeClass: "active",

                spy: true,
                smooth: true,

                duration: 400,
              });
            }}
          >
            HOME
          </div>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={400}
          >
            <div
              className={
                currentSectionInView === "About"
                  ? "active-tab navbar__item"
                  : "navbar__item"
              }
            >
              ABOUT
            </div>{" "}
          </Link>
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            duration={400}
          >
            <div
              className={
                currentSectionInView === "Project"
                  ? "active-tab navbar__item"
                  : "navbar__item"
              }
            >
              PROJECTS
            </div>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={400}
          >
            <div
              className={
                currentSectionInView === "Contact"
                  ? "active-tab navbar__item"
                  : "navbar__item"
              }
            >
              CONTACT
            </div>
          </Link>
        </header>
      </div>
    </Fragment>
  );
};
export default NavBar;
