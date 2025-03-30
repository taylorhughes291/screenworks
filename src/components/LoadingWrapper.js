/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import loadingArrow from "../assets/loading-arrow.svg";

const LoadingWrapper = ({
  isLoaded,
  loadingChildren = <></>,
  overrideStyles = css``,
  children,
}) => {
  if (!isLoaded) {
    return (
      <div
        className="loading-icon"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          ${overrideStyles}
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          img {
            width: 150px;
            animation: spin 1.5s linear infinite;
          }
        `}
      >
        <img src={loadingArrow} alt="loading arrow" />
        {loadingChildren}
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingWrapper;
