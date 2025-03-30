/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import { breakpoints } from "../themes";

const Nav = ({ overrideStyles = css``, children, onSelect }) => {
  const handleSelect = () => {
    onSelect && onSelect();
  };
  const location = `${useLocation().pathname.split("/").join("")}-nav`;
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
          padding: 0;
          li#${location} {
            font-weight: 800;
          }
          a {
            text-decoration: none;
            color: inherit;
            white-space: nowrap; /* Prevent text wrapping */
          }
          @media (${breakpoints.desktop}) {
            li a {
              font-size: 20px;
            }
          }
          @media (${breakpoints.desktopLarge}) {
            li a {
              font-size: 22px;
            }
          }
        `}
      >
        <li id="about-nav">
          <Link to="/about" onClick={handleSelect}>
            About
          </Link>
        </li>
        <li id="contact-nav">
          <Link to="/contact" onClick={handleSelect}>
            Contact
          </Link>
        </li>
        <li id="quote-nav">
          <Link to="/quote" onClick={handleSelect}>
            Quote
          </Link>
        </li>
        <li id="story-nav">
          <Link to="/story" onClick={handleSelect}>
            Our Story
          </Link>
        </li>
        <li id="photos-nav">
          <Link to="/photos" onClick={handleSelect}>
            Photos
          </Link>
        </li>
        <li id="faq-nav">
          <Link to="/faq" onClick={handleSelect}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
