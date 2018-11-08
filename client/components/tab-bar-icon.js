import React from "react";
import { Svg } from "expo";
import paths from "./svgs";

const Icon = ({ name, fill, stroke, strokeWidth, style, width, height }) => (
  <Svg
    style={style}
    viewBox="0 0 19.53 19.55"
    height={height || "26"}
    width={width || "24"}
  >
    {paths({ fill, stroke, strokeWidth })[name]}
  </Svg>
);

export default Icon;
