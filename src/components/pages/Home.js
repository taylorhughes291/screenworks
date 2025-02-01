/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "../Hero";
import LoadingWrapper from "../LoadingWrapper";
import { useFetchDatoCms } from "../../helpers/customHooks";

const Home = () => {
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
      <Hero
        overrideStyles={css`
          flex: 1;
        `}
        pageData={pageData}
      ></Hero>
    </LoadingWrapper>
  );
};

export default Home;
