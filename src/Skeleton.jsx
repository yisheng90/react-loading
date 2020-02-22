import React from "react";
import { Line } from "./Skeleton.styles";

const Skeleton = ({ rows = 1, ...props }) => {
  const lines = Array(rows)
    .fill(1)
    .map((d, idx) => (
      <Line key={idx} data-testid="skeleton__item" {...props} />
    ));

  return <>{lines}</>;
};

export default Skeleton;
