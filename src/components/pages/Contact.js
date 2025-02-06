/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import ContactSection from "../ContactSection";
import { breakpoints } from "../../themes";

const Contact = () => {
  const query = `query MyQuery {
    screenworksSite {
      contactUsTitle
      contactUsImage {
        url
      }
      phoneNumbers {
        name
        value
      }
      emails {
        name
        value
      }
      address
    }
  }`;

  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;

  const contactStyles = css`
    @media (${breakpoints.tablet}) {
      div.info-page-content {
        flex-direction: row;
        align-items: flex-start;
      }
      img.info-page-image {
        max-width: 300px;
      }
    }
  `;

  return (
    <InfoPage
      title={pageData?.contactUsTitle}
      imgSrc={pageData?.contactUsImage?.url}
      description=""
      isLoaded={cmsData.isLoaded}
      overrideStyles={contactStyles}
    >
      <div
        css={css`
          width: 100%;
          box-sizing: border-box;
          padding: 20px 16px;
          h3 {
            font-size: 16px;
          }
          @media (${breakpoints.tablet}) {
            padding: 0 0 0 25px;
          }
        `}
      >
        <ContactSection
          sectionName="Phone"
          sectionData={pageData?.phoneNumbers}
        />
        <ContactSection sectionName="Email" sectionData={pageData?.emails} />
        <h2
          css={css`
            margin: 0 0 7px;
          `}
        >
          Address
        </h2>
        <div
          css={css`
            padding-left: 10px;
          `}
        >
          <h3
            css={css`
              margin: 0;
            `}
          >
            Screenworks, Inc.
          </h3>
          <h3
            css={css`
              margin: 0;
              p {
                margin: 0;
              }
            `}
            dangerouslySetInnerHTML={{ __html: pageData?.address }}
          ></h3>
        </div>
      </div>
    </InfoPage>
  );
};

export default Contact;
