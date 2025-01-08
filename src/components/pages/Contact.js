/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import ContactSection from "../ContactSection";

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
  return (
    <InfoPage
      title={pageData?.contactUsTitle}
      imgSrc={pageData?.contactUsImage?.url}
      description=""
    >
      <div
        css={css`
          width: 100%;
          box-sizing: border-box;
          padding: 10px 16px;
          h3 {
            font-size: 16px;
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
            margin: 0;
            text-decoration: underline;
          `}
        >
          Address
        </h2>
        <h3
          css={css`
            margin: 0;
            padding-left: 5px;
            p {
              margin: 0;
            }
          `}
          dangerouslySetInnerHTML={{ __html: pageData?.address }}
        ></h3>
      </div>
    </InfoPage>
  );
};

export default Contact;
