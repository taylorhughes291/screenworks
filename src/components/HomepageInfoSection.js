/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, rotatableColorPallete, commonColors } from "../themes";
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
        `}
        ref={index === 0 ? scrollRef : null}
      >
        <h3
          css={css`
            text-align: center;
            margin: 0 0 15px;
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
