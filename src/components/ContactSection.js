/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ContactSection = ({ sectionName, sectionData }) => {
  const renderValue = (value) => {
    if (sectionName === "Email") {
      return <a href={`mailto:${value}`}>{value}</a>;
    }
    return value;
  };
  return (
    <>
      <h2
        css={css`
          margin: 0;
          text-decoration: underline;
        `}
      >
        {sectionName}
      </h2>
      <ul
        css={css`
          list-style-type: none;
          padding: 0 0 0 5px;
          margin: 0;
        `}
      >
        {sectionData?.map((item, index) => {
          return (
            <li
              key={index}
              css={css`
                margin-bottom: 5px;
              `}
            >
              <b>{item?.name}</b>: {renderValue(item?.value)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactSection;
