/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { breakpoints } from "../themes";

const Nav = ({ overrideStyles = css``, children, onSelect }) => {
  const handleSelect = () => {
    onSelect && onSelect();
  };
  return (
    <nav
      css={css`
        ${overrideStyles}
      `}
    >
      {children}
      <ul
        css={css`
          list-style-type: none;
          a {
            text-decoration: none;
            color: inherit;
          }
          @media (${breakpoints.desktop}) {
            li a {
              font-size: 22px;
            }
          }
        `}
      >
        <li>
          <Link to="/about" onClick={handleSelect}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleSelect}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/story" onClick={handleSelect}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/photos" onClick={handleSelect}>
            Photos
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={handleSelect}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
