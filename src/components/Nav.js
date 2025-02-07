/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { breakpoints } from "../themes";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      css={css`
        display: none;
        @media (${breakpoints.desktop}) {
          display: block;
        }
      `}
    >
      <ul
        css={css`
          display: flex;
          list-style-type: none;
          li {
            margin-right: 30px;
            font-size: 18px;
            font-weight: 600;
            a {
              text-decoration: none;
              color: inherit;
            }
          }
        `}
      >
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/story">Our Story</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
