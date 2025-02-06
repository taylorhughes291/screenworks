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
    <div
      css={css`
        margin-bottom: 25px;
      `}
    >
      <h2
        css={css`
          margin: 0 0 7px;
        `}
      >
        {sectionName}
      </h2>
      <ul
        css={css`
          list-style-type: none;
          padding: 0 0 0 10px;
          margin: 0;
        `}
      >
        {sectionData?.map((item, index) => {
          return (
            <li
              key={index}
              css={css`
                margin-bottom: 7px;
              `}
            >
              <b>{item?.name}</b>: {renderValue(item?.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactSection;
