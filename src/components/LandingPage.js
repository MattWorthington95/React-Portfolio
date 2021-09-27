import Typewriter from 'typewriter-effect';
import '../styles/LandingPage.css';

import { Link } from 'react-scroll';
import { useMediaQuery } from './useMediaQuery';

const LandingPage = () => {
  let isPageSmall = useMediaQuery('(max-width: 768px)');
  let isPageMedium = useMediaQuery('(min-width: 769px)');
  let isPageLarge = useMediaQuery('(min-width: 1200px)');
  console.log(isPageLarge);

  return (
    <div className="landing-page" id="landing-page">
      {isPageSmall && (
        <div className="code">
          <h2>
            <span className="string">
              &quot;Matt Worthington&quot;<span>;</span>
            </span>
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString(
                  '<span class="string">"FullStack Developer"</span>;'
                )

                .start();
            }}
          />
        </div>
      )}
      {isPageMedium && !isPageLarge && (
        <div className="code">
          <h2>
            <span className="const">const&nbsp;</span>
            <span className="value">name&nbsp;</span> <span>=&nbsp;</span>
            <span className="string">
              &quot;Matt Worthington&quot;<span>;</span>
            </span>
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString(
                  "<span class='const'>const</span> <span class='value'>title</span> = <span class='string'>&quot;FullStack Developer&quot;</span>;"
                )

                .start();
            }}
          />
          ;
        </div>
      )}
      {isPageLarge && (
        <div className="code">
          <h2>
            <span className="const">const&nbsp;</span>
            <span className="value">name&nbsp;</span> <span>=&nbsp;</span>
            <span className="string">
              &quot;Matt Worthington&quot;<span>;</span>
            </span>
          </h2>
          <h2>
            <span className="const">const&nbsp;</span>
            <span className="value">title&nbsp;</span> <span>=&nbsp;</span>
            <span className="string">
              &quot;Fullstack Developer&quot;<span>;</span>
            </span>
          </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString(
                  "<span class='const'>const</span> <span class='value'>tagLine</span> = <span class='string'>`Let's have a chat about ${<span class='stringTemp'>yourCompanyName</span>}`</span>;"
                )

                .start();
            }}
          />
        </div>
      )}

      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        duration={400}
      >
        <div className="subtitle">
          <p className="aboutButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            View my work<i className="gg-arrow-right-o"></i>
          </p>
        </div>
      </Link>
    </div>
  );
};
export default LandingPage;
// <div className="code">
// <h2>
//   <span className="const">const&nbsp;</span>
//   <span className="value">name&nbsp;</span> <span>=&nbsp;</span>
//   <span className="string">
//     &quot;Matt Worthington&quot;<span>;</span>
//   </span>
// </h2>
// <h2>
//   <span className="const">const&nbsp;</span>
//   <span className="value">title&nbsp;</span> <span>=&nbsp;</span>
//   <span className="string">
//     &quot;FullstackDeveloper&quot;<span>;</span>
//   </span>
// </h2>
// <Typewriter
//   onInit={(typewriter) => {
//     typewriter
//       .changeDelay(80)
//       .typeString(
//         "<span class='const'>const</span> <span class='value'>tagLine</span> = <span class='string'>`Let's have a chat about ${<span class='stringTemp'>yourCompanyName</span>}`</span>;"
//       )

//       .start();
//   }}
// />
//   ;
// </div>;
