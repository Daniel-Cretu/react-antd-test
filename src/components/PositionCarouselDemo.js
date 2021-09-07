import React from "react";
import { Carousel, Radio } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const PositionCarouselDemo = () => {
  const [dotPosition, setDotPosition] = React.useState("left");

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </h3>
        </div>
      </Carousel>
    </>
  );
};
