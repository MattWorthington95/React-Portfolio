import Typewriter from "typewriter-effect";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(
            "<span class='name'>Matt Worthington</span><br/>FullstackDeveloper"
          )
          .start();
      }}
    />
  );
};
export default LandingPage;
