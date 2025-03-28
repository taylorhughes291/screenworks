/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, breakpoints } from "../themes";

const CtaButton = ({ href, displayText, overrideStyles = css`` }) => {
  return (
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
        @media (${breakpoints.tablet}) {
          padding: 15px 40px;
          font-size: 20px;
          font-weight: 700;
          border: 2px solid ${colorPalette.color5};
        }
        ${overrideStyles}
      `}
      href={href}
      role="button"
    >
      {displayText}
    </a>
  );
};

export default CtaButton;
