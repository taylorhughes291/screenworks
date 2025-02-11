/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";
import { breakpoints } from "../../themes";

const Photos = () => {
  const query = `query MyQuery {
    screenworksSite {
      photoGalleryTitle
      photoGallery {
        photo {
          url
          alt
        }
        photoCaption {
          blocks
          links
          value
        }
      }
    }
  }`;
  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;

  const photoRender = pageData?.photoGallery.map((item, index) => {
    const indexEven = index % 2 === 0;
    return (
      <div
        key={index}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
          &:last-of-type {
            margin-bottom: 0;
          }
          @media (${breakpoints.tablet}) {
            flex-direction: ${indexEven ? "row" : "row-reverse"};
            align-items: flex-start;
          }
        `}
      >
        <img
          src={item?.photo?.url}
          alt={item?.photo?.alt}
          css={css`
            max-width: 100%;
            @media (${breakpoints.tablet}) {
              max-width: 60%;
              max-height: 700px;
            }
            @media (${breakpoints.desktop}) {
              max-width: 50%;
            }
          `}
        />
        <div
          css={css`
            margin-top: 5px;
            p {
              margin: 0;
              text-align: center;
              padding: 0 5px;
            }
            @media (${breakpoints.tablet}) {
              margin-top: 5px;
              p {
                text-align: start;
                margin-left: 10px;
              }
            }
          `}
        >
          <StructuredText
            data={item?.photoCaption}
            css={css`
              margin: 0;
            `}
          />
        </div>
      </div>
    );
  });
  return (
    <InfoPage title={pageData?.photoGalleryTitle} isLoaded={cmsData.isLoaded}>
      <div
        css={css`
          margin-top: 10px;
          @media (${breakpoints.tablet}) {
            margin-top: 0;
            display: flex;
            flex-direction: column;
          }
        `}
      >
        {photoRender}
      </div>
    </InfoPage>
  );
};

export default Photos;
