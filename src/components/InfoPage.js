/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, commonColors, breakpoints } from "../themes";
import LoadingWrapper from "./LoadingWrapper";

const InfoPage = ({
  title,
  imgData,
  description,
  children,
  isLoaded,
  overrideStyles,
}) => {
  return (
    <LoadingWrapper isLoaded={isLoaded}>
      <div
        css={css`
          width: 100%;
          background-color: ${colorPalette.color2};
          @media (${breakpoints.desktop}) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          ${overrideStyles}
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border: 2px solid ${colorPalette.color1};
            border-radius: 6px;
            background-color: ${commonColors.white};
            margin: 15px 20px;
            box-sizing: border-box;
            @media (${breakpoints.tablet}) {
              padding: 15px 20px;
            }
            @media (${breakpoints.desktop}) {
              margin: 25px 30px;
              max-width: 1300px;
              align-self: stretch;
            }
          `}
        >
          {title && (
            <h1
              css={css`
                margin: 0 0 10px;
                @media (${breakpoints.tablet}) {
                  margin-bottom: 20px;
                }
              `}
            >
              {title}
            </h1>
          )}
          <div
            className="info-page-content"
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              @media (${breakpoints.desktop}) {
                font-size: 20px;
              }
            `}
          >
            {imgData?.url && (
              <img
                src={imgData?.url}
                alt={imgData?.alt}
                className="info-page-image"
                css={css`
                  max-width: 100%;
                  max-height: 100%;
                `}
              />
            )}
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
      </div>
    </LoadingWrapper>
  );
};

export default InfoPage;
