import styled, { keyframes, css } from "styled-components";

export const colors = {
  base: "#eee",
  highlight: "#f5f5f5"
};

const getCircularStyle = ({ circle }) =>
  circle &&
  css`
    border-radius: 50%;
  `;

const getSkeletonHeight = ({ height, circle, width }) => {
  if (circle && width) {
    height = width;
  }

  if (typeof height === "number") {
    height = `${height}px`;
  }

  return css`
    height: ${height || "100%"};
  `;
};

const getSkeletonWidth = ({ width, circle, height }) => {
  if (!width && circle && height) {
    width = height;
  }

  if (typeof width === "number") {
    width = `${width}px`;
  }

  return css`
    width: ${width || "100%"};
  `;
};

export const skeletonKeyframe = keyframes`
    0% {
        background-position: -220px 0;
    }
    100% {
        background-position: calc(220px + 100%) 0;
    }
`;

export const Line = styled.span`
  &&& {
    display: block;
    margin: 0 0 4px 0;
    background-color: ${colors.base};
    background-image: linear-gradient(
      90deg,
      ${colors.base},
      ${colors.highlight},
      ${colors.base}
    );
    background-size: 220px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    line-height: 1.5;
    min-height: 16px;
    animation: ${skeletonKeyframe} 1.5s ease-in-out infinite;
    ${getCircularStyle}
    ${getSkeletonHeight}
    ${getSkeletonWidth}
  }
`;
