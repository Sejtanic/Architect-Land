import "./Home.css";
import Image from "../../Components/Image/Image";
import HomeSectionOne from "./Sections/HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "./Sections/HomeSectionTwo/HomeSectionTwo";
import HomeSectionThree from "./Sections/HomeSectionThree/HomeSectionThree";
import HomeSectionFour from "./Sections/HomeSectionFour/HomeSectionFour";
import HomeSectionFive from "./Sections/HomeSectionFive/HomeSectionFive";
import HomeSectionSix from "./HomeSectionSix/HomeSectionSix";

const Home = () => {
  return (
    <div className="home-style">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
    </div>
  );
};
export default Home;
