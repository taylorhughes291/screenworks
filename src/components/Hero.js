/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DownArrow from "./DownArrow";
import { colorPalette } from "../themes";
import { useFetchDatoCms } from "../helpers/customHooks";

const Hero = ({ overrideStyles }) => {
  const query = `query MyQuery {
    screenworksSite {
      homepageTitle
      callToActionLocation
      callToActionTitle
      homepageCoverImage {
        url
      }
    }
  }`;

  const cmsFetch = useFetchDatoCms(query);
  const pageData = cmsFetch?.screenworksSite;

  return (
    <div
      css={css`
        background-image: url("https://picsum.photos/200/200");
        background-size: contain;
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
          border: 2px solid ${colorPalette.color5};
          padding: 10px 15px 15px;
          border-radius: 10px;
          background-color: ${colorPalette.color2}CC;
        `}
      >
        <h2
          css={css`
            margin: 0 0 15px;
            max-width: 360px;
          `}
        >
          {pageData?.homepageTitle}
        </h2>
        <a
          css={css`
            padding: 10px 30px;
            border-radius: 10px;
            border: 1px solid ${colorPalette.color5};
            font-size: 16px;
            font-weight: 600;
            color: ${colorPalette.color5};
            background-color: ${colorPalette.color4};
            text-decoration: none;
          `}
          href={pageData?.callToActionLocation}
          role="button"
        >
          {pageData?.callToActionTitle}
        </a>
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
