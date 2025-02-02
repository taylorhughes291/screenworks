/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "../Hero";
import LoadingWrapper from "../LoadingWrapper";
import { useFetchDatoCms } from "../../helpers/customHooks";
import Header from "../Header";

const Home = ({ children }) => {
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
  const isLoaded = cmsFetch.isLoaded;
  return (
    <LoadingWrapper isLoaded={isLoaded}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}
      >
        <Header />
        <Hero
          overrideStyles={css`
            flex: 1;
          `}
          pageData={pageData}
        ></Hero>
      </div>
      <div
        className="info-section"
        css={css`
          height: 400px;
          width: 100%;
        `}
      >
        Info section
      </div>
    </LoadingWrapper>
  );
};

export default Home;
