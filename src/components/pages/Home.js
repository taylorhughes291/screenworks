/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "../Hero";
import LoadingWrapper from "../LoadingWrapper";
import { useFetchDatoCms } from "../../helpers/customHooks";
import Header from "../Header";
import HomepageInfoSection from "../HomepageInfoSection";

const Home = () => {
  const query = `query MyQuery {
    screenworksSite {
      homepageTitle
      callToActionLocation
      callToActionTitle
      homepageCoverImage {
        url
      }
      infoSections {
        callToAction
        callToActionLocation
        infoSectionSubtitle
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
      {pageData?.infoSections.map((section, index) => {
        return (
          <HomepageInfoSection key={index} index={index} section={section} />
        );
      })}
    </LoadingWrapper>
  );
};

export default Home;
