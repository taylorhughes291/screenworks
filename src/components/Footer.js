/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette } from "../themes";
import screenworksLogo from "../assets/screenworks-logo.svg";
import { useFetchDatoCms } from "../helpers/customHooks";

const Footer = () => {
  const query = `query MyQuery {
    screenworksSite {
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
  console.log(pageData);

  return (
    <div
      css={css`
        height: 200px;
        background-color: ${colorPalette.color4};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      `}
    >
      <img
        src={screenworksLogo}
        alt="screenworks logo"
        css={css`
          max-width: 250px;
        `}
      />
      <div
        css={css`
          margin: 8px 0 0;
          padding-left: 5px;
          text-align: center;
          p {
            margin: 0;
          }
        `}
        dangerouslySetInnerHTML={{ __html: pageData?.address }}
      ></div>
    </div>
  );
};

export default Footer;
