import React from "react";
import "./Slider.css";
import { useEffect, useState } from "react";
import { mainStore } from "../../State/store";
import { useObserver } from "../../customHooks";
const Slider = () => {
  const [xValue, setXValue] = useState(0);
  const { setSliderPosition, sliderPosition } = mainStore((store) => store);

  useObserver(".resize-name", true, "letter-normal", 0.5);

  const elementNumber = document.querySelectorAll(".slider-content").length - 1;
  const leftHandler = () => {
    setXValue((previusState) => {
      if (previusState === 0) return -elementNumber;
      return previusState + 1;
    });
  };
  const rightHandler = () => {
    setXValue((previusState) => {
      if (-elementNumber === previusState) return 0;
      return previusState - 1;
    });
  };
  useEffect(() => {
    setSliderPosition(xValue);
  }, [xValue]);
  return (
    <div className="slider-style">
      <button onClick={leftHandler}>&#8249;</button>
      <div className="slider-content-all">
        <div
          className="slider"
          style={{
            transform: `translateX(calc(${xValue} * 100%))`,
          }}
        >
          <div className="slider-content one">
            <p>what</p>
            <p>we</p>
            <p>do</p>
          </div>
          <div className="slider-content two">
            <div>
              <h1>Design</h1>
              <h4>
                We work closely with the client to realize all their ideas
              </h4>
            </div>
          </div>
          <div className="slider-content three">
            <div>
              <h1>Exterior</h1>
              <h4>We are proficient in all aspects of exterior design</h4>
            </div>
          </div>
          <div className="slider-content four">
            <div>
              <h1>Interior</h1>
              <h4>Improve quality of your everyday life</h4>
            </div>
          </div>
          <div className="slider-content five">
            <h1>Location</h1>
            <h4>Discovering perfect location for you</h4>
          </div>

          <div className="slider-content six">
            <h2 className="resize-name">Architect Land</h2>
            <p>architect-land@gmail.com</p>
          </div>
        </div>
      </div>
      <button onClick={rightHandler}>&#8250;</button>
    </div>
  );
};
export default React.memo(Slider);
