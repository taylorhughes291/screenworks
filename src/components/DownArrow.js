/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HomepageScrollContext } from "./HomepageScrollProvider";
import { useContext } from "react";

const DownArrow = ({ overrideStyles, width = "30", fill = "#000" }) => {
  const { scrollRef } = useContext(HomepageScrollContext);
  const handleClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      css={css`
        ${overrideStyles}
      `}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        fill={fill}
        version="1.1"
        viewBox="0 0 330 330"
        xmlSpace="preserve"
      >
        <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path>
      </svg>
    </div>
  );
};

export default DownArrow;
