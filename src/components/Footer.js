/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colorPalette, breakpoints } from "../themes";
import screenworksLogo from "../assets/screenworks-logo.svg";
import { useFetchDatoCms } from "../helpers/customHooks";

const Footer = () => {
  const query = `query MyQuery {
    screenworksSite {
      phoneNumbers {
        name
        value
        primary
      }
      emails {
        name
        value
        primary
      }
      address
    }
  }`;
  const cmsData = useFetchDatoCms(query);
  const pageData = cmsData?.screenworksSite;
  const primaryPhone = pageData?.phoneNumbers.find(
    (item) => item.primary,
  )?.value;
  const primaryEmail = pageData?.emails.find((item) => item.primary)?.value;

  return (
    <div
      css={css`
        background-color: ${colorPalette.color4};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        p,
        a {
          font-size: 13px;
          margin: 0;
          @media (${breakpoints.tablet}) {
            font-size: 15px;
          }
          @media (${breakpoints.desktop}) {
            font-size: 16px;
          }
        }
      `}
    >
      <img
        src={screenworksLogo}
        alt="screenworks logo"
        css={css`
          max-width: 250px;
          margin-bottom: 8px;
          @media (${breakpoints.tablet}) {
            max-width: 300px;
            margin-bottom: 12px;
          }
          @media (${breakpoints.desktop}) {
            max-width: 340px;
          }
        `}
      />
      <p>&copy;Copyright 2025</p>
      <div
        css={css`
          padding-left: 5px;
          text-align: center;
          margin: 13px 0;
          p {
            margin: 0;
            font-size: 13px;
          }
        `}
        dangerouslySetInnerHTML={{ __html: pageData?.address }}
      ></div>
      <p>{primaryPhone}</p>
      <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
    </div>
  );
};

export default Footer;
