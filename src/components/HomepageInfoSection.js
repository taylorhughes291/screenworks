/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  colorPalette,
  rotatableColorPallete,
  commonColors,
  breakpoints,
} from "../themes";
import { useContext } from "react";
import { HomepageScrollContext } from "./HomepageScrollProvider";
import backgroundImage from "../assets/background-homepage-info-section.jpg";

const HomepageInfoSection = ({ index, section }) => {
  const { scrollRef } = useContext(HomepageScrollContext);
  const { color4, color5, color2 } = colorPalette;
  const backgroundPallete = rotatableColorPallete(
    [color4, color5, color2],
    [commonColors.white],
  );
  const backgroundPalletteLength = backgroundPallete.length;
  const backgroundColor = backgroundPallete[index % backgroundPalletteLength];
  return (
    <div
      css={css`
        background-image: url(${backgroundImage});
        background-size: cover;
      `}
    >
      <div
        css={css`
          padding: 20px;
          background-color: ${backgroundColor}CC;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @media (${breakpoints.tablet}) {
            min-height: 280px;
          }
        `}
        ref={index === 0 ? scrollRef : null}
      >
        <h3
          css={css`
            text-align: center;
            margin: 0 0 15px;
            @media (${breakpoints.tablet}) {
              font-size: 27px;
              margin: 0 0 30px;
              max-width: 570px;
            }
          `}
        >
          {section.infoSectionSubtitle}
        </h3>
        <a
          css={css`
            padding: 10px 30px;
            border-radius: 10px;
            border: 1px solid ${color5};
            font-size: 16px;
            font-weight: 600;
            color: ${color5};
            background-color: ${color4};
            text-decoration: none;
            @media (${breakpoints.tablet}) {
              padding: 15px 40px;
              font-size: 20px;
              font-weight: 700;
            }
          `}
          href={section.callToActionLocation}
          role="button"
        >
          {section.callToAction}
        </a>
      </div>
    </div>
  );
};

export default HomepageInfoSection;
