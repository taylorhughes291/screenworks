export const colorPalette = {
  color1: "#D23427",
  color2: "#9EC6EC",
  color3: "#918F90",
  color4: "#FFC547",
  color5: "#1C1D21",
};

export const rotatableColorPallete = (exclusions = [], inclusions = []) => {
  return Object.values(colorPalette)
    .filter((color) => !exclusions.includes(color))
    .concat(inclusions);
};

export const commonColors = {
  white: "#FFFFFF",
};

export const backgroundColor = colorPalette.color2;
