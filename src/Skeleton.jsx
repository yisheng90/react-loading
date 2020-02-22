import React from "react";
import PropTypes from "prop-types";
import { Line } from "./Skeleton.styles";

const Skeleton = ({ rows, ...props }) => {
  const lines = Array(rows)
    .fill(1)
    .map((d, idx) => (
      <Line key={idx} data-testid="skeleton__item" {...props} />
    ));

  return <>{lines}</>;
};

Skeleton.propTypes = {
  rows: PropTypes.number,
  circle: PropTypes.bool,
  height: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
  width: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)]
};

Skeleton.defaultProps = {
  rows: 1
};

export default Skeleton;
