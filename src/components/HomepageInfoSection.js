/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, rotatableColorPallete, commonColors } from "../themes";
import { useContext } from "react";
import { HomepageScrollContext } from "./HomepageScrollProvider";

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
        padding: 20px;
        background-color: ${backgroundColor};
        min-height: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      ref={index === 0 ? scrollRef : null}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 15px;
          background-color: ${color2};
          border-radius: 10px;
          border: 1px solid ${color5};
          min-height: 140px;
        `}
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
