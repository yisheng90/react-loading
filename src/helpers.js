export const isValidStyleColor = (color) => {
  const style = new Option().style;
  style.color = color;
  return !!style.color;
};

export const getTranslucent = (color) => {
  const colorIndex = color.split(",");

  return colorIndex.length === 4 ? parseFloat(colorIndex.pop() || "") : 1;
};

export const matchRgba = (color) =>
  color.match(
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/
  );

export const getRgba = (color, opacity) => {
  const match = matchRgba(color);

  if (!match) {
    return color;
  }

  return `rgba(${Number(match[1])}, ${Number(match[2])},  ${Number(
    match[3]
  )}, ${opacity !== undefined ? opacity : Number(match[4])})`;
};
