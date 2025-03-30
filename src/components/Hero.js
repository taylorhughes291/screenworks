/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DownArrow from "./DownArrow";
import CtaButton from "./CtaButton";
import { colorPalette, breakpoints } from "../themes";

const Hero = ({ overrideStyles, pageData }) => {
  return (
    <div
      css={css`
        background-image: url(${pageData?.homepageCoverImage?.url});
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        ${overrideStyles}
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px solid ${colorPalette.color5};
          padding: 10px 20px 20px;
          border-radius: 10px;
          background-color: ${colorPalette.color2};
          margin: 0 20px;
          @media (${breakpoints.tablet}) {
            width: 500px;
            height: 200px;
          }
        `}
      >
        <h2
          css={css`
            margin: 0 0 15px;
            @media (${breakpoints.tablet}) {
              font-size: 30px;
              margin: 0 0 30px;
            }
          `}
        >
          {pageData?.homepageTitle}
        </h2>
        <CtaButton
          href={pageData?.callToActionLocation}
          displayText={pageData?.callToActionTitle}
        />
      </div>
      <DownArrow
        overrideStyles={css`
          position: absolute;
          bottom: 0;
        `}
        fill={colorPalette.color5}
      />
    </div>
  );
};

export default Hero;
