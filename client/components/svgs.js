import React from "react";
import { Svg } from "expo";

const Path = Svg.Path;
const Circle = Svg.Circle;
const G = Svg.G;
const Line = Svg.Line;

const paths = ({ fill, stroke, strokeWidth }) => ({
  Home: (
    <Path
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      d="M9.15 1.24l8.14 6v11.95H12v-4.83a3.59 3.59 0 0 0-2.85-2.56 3.59 3.59 0 0 0-2.82 2.56v4.83H1V7.27z"
    />
  ),
  Activity: (
    <Path
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      d="M1 10h3l3 8 4-17 3 12 3-6h4"
    />
  ),
  Discover: (
    <G>
      <Circle
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        cx="8"
        cy="8"
        r="7"
      />
      <Path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M12.82 13.07l5.71 5.48"
      />
    </G>
  ),
  Profile: (
    <G>
      <Circle
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        cx="8.33"
        cy="4.71"
        r="3.71"
      />
      <Path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M15.63 20.5S16 15.38 14 13.13c-1.59-1.72-3.33-2.08-5.63-2.13s-4 .41-5.63 2.13C.62 15.38 1 20.5 1 20.5"
      />
    </G>
  ),
  Camera: (
    <G>
      <Line
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        x1="10"
        x2="10"
        y2="19.53"
      />
      <Line
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        x1="19.55"
        y1="10"
        y2="10"
      />
    </G>
  )
});

export default paths;
