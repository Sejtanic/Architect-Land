import "./HomeSectionOne.css";
import { mainStore } from "../../../../State/store";
import Slider from "../../../../Components/Slider/Slider";
import Fade from "../../../../Components/Fade/Fade";

const addBackground = (sliderPosition) => {
  if (sliderPosition === 0) return "";
  if (sliderPosition === -1)
    return "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
  if (sliderPosition === -2)
    return "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
  if (sliderPosition === -3)
    return "https://img.freepik.com/free-photo/interior-has-armchair-empty-white-wall_41470-1722.jpg?w=2000";
  if (sliderPosition === -4)
    return "https://img.freepik.com/premium-vector/world-map-silhouette-digital-simple-grey-map-flat-style-vector-realistic-illustration-earth-isolated-white-background_176516-1332.jpg?w=2000";
  if (sliderPosition === -5)
    return "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80";
};

const HomeSectionOne = () => {
  const { sliderPosition } = mainStore((state) => state);
  return (
    <section
      className={"home-section-one-style "}
      style={{
        background: `url(${addBackground(sliderPosition)})
            no-repeat center center/cover`,
      }}
    >
      <Slider />
      <Fade />
    </section>
  );
};
export default HomeSectionOne;
