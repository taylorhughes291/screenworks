/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, commonColors } from "../themes";

const InfoPage = ({ title, imgSrc, description, children }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        background-color: ${colorPalette.color2};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          border: 2px solid ${colorPalette.color1};
          border-radius: 6px;
          background-color: ${commonColors.white};
          margin: 15px 20px;
          box-sizing: border-box;
        `}
      >
        {title && (
          <h2
            css={css`
              margin: 0 0 8px;
            `}
          >
            {title}
          </h2>
        )}
        {imgSrc && <img src={imgSrc} alt="screenworks founding" />}
        {description && (
          <p
            css={css`
              margin: 10px 10px 2px;
            `}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default InfoPage;
