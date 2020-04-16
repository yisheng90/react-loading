import styled, { keyframes, css } from "styled-components";
import { isValidStyleColor } from './helpers';

export const colors = {
  base: "#eee",
  highlight: "#f5f5f5",
  highlightTranslucent: "#f5f5f54D",
};

const getColorStyle = ({color, translucent}) => {
  const baseColor = isValidStyleColor(color) ?  color : colors.base;
  const hightlightColor = baseColor === colors.base ? colors.highlight : colors.highlightTranslucent;

  return css`
    opacity: ${translucent ? "0.3" : "1"};
    background-color: ${baseColor};
    background-image: linear-gradient(
      90deg,
      rgba(255,0,0,0),
      ${hightlightColor},
      rgba(255,0,0,0)
    );
  `;
}

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
    background-size: 220px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    line-height: 1.5;
    min-height: 16px;
    animation: ${skeletonKeyframe} 1.5s ease-in-out infinite;
    ${getCircularStyle}
    ${getSkeletonHeight}
    ${getSkeletonWidth}
    ${getColorStyle}
  }
`;

export const Container = styled.div`
  &&& {
    display: flex;
    align-items: center;
    
     > span {
       margin-right: 10px;
     }
  }
`;