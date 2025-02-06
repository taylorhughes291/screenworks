/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";
import { breakpoints } from "../../themes";

const About = () => {
  const query = `query MyQuery {
    screenworksSite {
      aboutPageDescription {
        value
        blocks
        links
      }
      aboutPageImage {
        url
      }
      aboutPageTitle
    }
  }`;

  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;

  const aboutStyles = css`
    div.info-page-content {
      @media (${breakpoints.tablet}) {
        display: block;
      }
    }
    img.info-page-image {
      @media (${breakpoints.tablet}) {
        max-width: 300px;
        float: left;
        margin-right: 20px;
      }
    }
  `;
  return (
    <InfoPage
      title={pageData?.aboutPageTitle}
      imgSrc={pageData?.aboutPageImage?.url}
      description=""
      isLoaded={cmsData.isLoaded}
      overrideStyles={aboutStyles}
    >
      <div
        css={css`
          p {
            margin: 0;
          }
        `}
      >
        <StructuredText data={pageData?.aboutPageDescription}></StructuredText>
      </div>
    </InfoPage>
  );
};

export default About;
