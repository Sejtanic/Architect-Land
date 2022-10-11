import { useEffect, useState } from "react";
import { useObserver } from "../../customHooks";
import "./ImageHoverComponentTwo.css";
const ImageHoverComponentTwo = (props) => {
  const [mainImage, setMainImage] = useState(props.content.images[2]);
  const className = props.item;

  useObserver(".image-component-two-image", false, "scaleback", 0.3);

  const handleEvent = (event, element) => {
    element.addEventListener(event, (e) => {
      if (event === "click") {
        setMainImage(e.target.src);
        return;
      }
      e.target.firstChild.classList.add("full-size-two");
      setMainImage(e.target.firstChild.src);
    });
  };

  useEffect(() => {
    document.querySelectorAll(`.${className}`).forEach((element, index) => {
      handleEvent("mouseenter", element, index, className);
      handleEvent("click", element, index, className);
    });
  }, []);
  return (
    <div className="image-component-two-style">
      <h3 className="image-section-two-label">{props.content.label}</h3>
      <img src={mainImage} alt="" className="image-component-main-image" />
      <div className="image-component-two-image-area">
        {props.content.images.map((image, index) => {
          return (
            <div
              style={{ transitionDelay: `${index * 0.1}s` }}
              key={index}
              className={`${className} image-component-two-image `}
            >
              <img
                className={
                  index === 2
                    ? `component-two-image full-size-two`
                    : `component-two-image`
                }
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageHoverComponentTwo;
