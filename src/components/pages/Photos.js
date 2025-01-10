/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "../InfoPage";
import { useFetchDatoCms } from "../../helpers/customHooks";
import { StructuredText } from "react-datocms";

const Photos = () => {
  const query = `query MyQuery {
    screenworksSite {
      photoGalleryTitle
      photoGallery {
        photo {
          url
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
    return (
      <div
        key={index}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        `}
      >
        <img
          src={item?.photo?.url}
          alt=""
          css={css`
            max-width: 100%;
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
    <InfoPage title={pageData?.photoGalleryTitle}>
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        {photoRender}
      </div>
    </InfoPage>
  );
};

export default Photos;
