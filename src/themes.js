/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

export const breakpoints = {
  mobileMedium: "min-width: 340px",
  tablet: "min-width: 768px",
  desktop: "min-width: 1024px",
};

export const commonStyles = {
  basicInfoTabletStyles: css`
    @media (${breakpoints.tablet}) {
      div.info-page-content {
        display: block;
      }
      img.info-page-image {
        max-width: 300px;
        float: left;
        margin-right: 20px;
      }
      p {
        margin: 0;
      }
    }
  `,
};
