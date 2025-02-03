/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "../themes";
import { useContext } from "react";
import { HomepageScrollContext } from "./HomepageScrollProvider";

const HomepageInfoSection = ({ index, section }) => {
  const { scrollRef } = useContext(HomepageScrollContext);

  return (
    <div
      id={`info-section-${index + 1}`}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      `}
      ref={index === 0 ? scrollRef : null}
    >
      <h2>{section.infoSectionSubtitle}</h2>
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
        href={section.callToActionLocation}
        role="button"
      >
        {section.callToAction}
      </a>
    </div>
  );
};

export default HomepageInfoSection;
