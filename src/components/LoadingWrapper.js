/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import loadingArrow from "../assets/loading-arrow.svg";

const LoadingWrapper = ({ isLoaded, children }) => {
  if (!isLoaded) {
    return (
      <div
        className="loading-icon"
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 40px;
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          img {
            animation: spin 1.5s linear infinite;
          }
        `}
      >
        <img src={loadingArrow} alt="loading arrow" />
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingWrapper;
