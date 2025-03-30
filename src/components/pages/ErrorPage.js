/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "../../themes";
import Header from "../Header";
import Footer from "../Footer";
import InfoPage from "../InfoPage";

const ErrorPage = () => {
  return (
    <div>
      <div
        css={css`
          background-color: ${colorPalette.color2};
          min-height: 100vh;
        `}
      >
        <Header />
        <InfoPage>
          <h1
            css={css`
              margin: 0 0 10px;
            `}
          >
            Oops!
          </h1>
          <p
            css={css`
              margin: 0 0 10px;
            `}
          >
            Sorry, an unexpected error has occurred.
          </p>
          <p
            css={css`
              margin: 0 0 30px;
            `}
          >
            Make sure you check your URL, or try clicking on one of the buttons
            above.
          </p>
        </InfoPage>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
