import React from "react";
import "./ImageHoverComponent.css";
import { useEffect, useState } from "react";
import { useObserver } from "../../customHooks";

const animationDelay = (index) => {
  if (index === 0 || index === 4) return 0;
  if (index === 1 || index === 3) return 0.2;
  return 0.4;
};

const ImageHoverComponent = (props) => {
  const textValue = (index) => {
    if (index === 0) return props.content.content[0];
    if (index === 1) return props.content.content[1];
    if (index === 2) return props.content.content[2];
    if (index === 3) return props.content.content[3];
    if (index === 4) return props.content.content[4];
  };

  const [text, setText] = useState(props.content.content[2]);

  useObserver(".image-hover-component-section", false, "rescale", 1);

  const handleEvent = (event, element, index, className) => {
    element.addEventListener(event, (e) => {
      setText(textValue(index));
      document
        .querySelectorAll(`.${className}`)
        .forEach((element) => element.classList.remove("full-show"));
      if (event === "click")
        return e.target
          .closest(".image-hover-component-section")
          .classList.add("full-show");
      e.target.classList.add("full-show");
    });
  };

  const className = props.item;

  useEffect(() => {
    document.querySelectorAll(`.${className}`).forEach((element, index) => {
      handleEvent("mouseenter", element, index, className);
      handleEvent("click", element, index, className);
    });
  }, []);

  return (
    <div className="image-hover-component">
      <h3 className="image-section-label">{props.content.label}</h3>
      <p className="image-section-description">{text}</p>
      <div className="image-hover-component-style">
        {props.content.images.map((image, index) => {
          return (
            <div
              style={{
                animationDelay: `${animationDelay(index)}s`,
              }}
              key={index}
              className={
                index === 2
                  ? `${className} image-hover-component-section full-show`
                  : `${className} image-hover-component-section `
              }
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default React.memo(ImageHoverComponent);
