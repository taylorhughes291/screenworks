/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";

const Faq = () => {
  const query = `query MyQuery {
    screenworksSite {
      faqTitle
      questionAnswerSet {
        question
        answer {
          blocks
          links
          value
        }
      }
      faqPhoto {
        url
      }
    }
  }`;
  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;

  const faqRender = pageData?.questionAnswerSet?.map((item, index) => {
    return (
      <div
        key={index}
        css={css`
          margin-bottom: 50px;
          :last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        <b>{item.question}</b>
        <div
          css={css`
            p {
              margin: 10px 0 0;
            }
          `}
        >
          <StructuredText data={item.answer} />
        </div>
      </div>
    );
  });

  return (
    <InfoPage title={pageData?.faqTitle} imgSrc={pageData?.faqPhoto?.url}>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        {/* {faqRender} */}
      </div>
    </InfoPage>
  );
};

export default Faq;
