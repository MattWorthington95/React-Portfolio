import Typewriter from "typewriter-effect";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page">
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
            &quot;FullstackDeveloper&quot;<span>;</span>
          </span>
        </h2>

        <Typewriter
          delay={7000}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(60)
              .typeString(
                "<span class='const'>const</span> <span class='value'>tagLine</span> = <span class='string'>`Let's have a chat about ${<span class='stringTemp'>yourCompanyName</span>}`</span>;"
              )

              .start();
          }}
        />
      </div>
      <div class="subtitle">
        <p class="aboutButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          View my work<i class="gg-arrow-right-o"></i>
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
