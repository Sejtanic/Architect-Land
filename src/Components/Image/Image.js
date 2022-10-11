import { useObserver } from "../../customHooks";
import "./Image.css";
const Image = (props) => {
  useObserver(".image", true, "bounce", 0.6);
  return (
    <img
      className={`image ${props.className}`}
      style={{
        top: `${props.position[0]}%`,
        left: `${props.position[1]}%`,
        height: `${props.position[2]}%`,
        width: `${props.position[3]}%`,
        zIndex: props.position[4],
      }}
      src={props.link}
      alt={props.description}
    />
  );
};
export default Image;
