/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import burgerMenu from "../assets/burger-menu.svg";
import { css } from "@emotion/react";
import xIcon from "../assets/x-symbol.svg";
import { colorPalette, breakpoints } from "../themes";
import { Link } from "react-router-dom";
import useOutsideClick from "../helpers/customHooks";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const onSelect = () => {
    console.log("here");
    setShowMenu(false);
  };

  useOutsideClick(menuRef, onSelect);

  return (
    <>
      <img
        src={burgerMenu}
        alt="hamburger menu"
        onClick={() => setShowMenu(!showMenu)}
        css={css`
          width: 30px;
          height: 30px;
          @media (${breakpoints.tablet}) {
            width: 40px;
            height: 40px;
          }
        `}
      />
      {showMenu && (
        <>
          <div
            className="hamburger-mask"
            css={css`
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              z-index: 4;
              background-color: ${colorPalette.color3};
              opacity: 0.5;
            `}
          />
          <nav
            css={css`
              height: 100vh;
              width: 200px;
              position: fixed;
              background: white;
              z-index: 5;
              right: 0;
              top: 0;
              border: 1px solid ${colorPalette.color3};
              border-radius: 4px 0 0 7px;
              @media (${breakpoints.tablet}) {
                width: 300px;
              }
            `}
            ref={menuRef}
          >
            <img
              src={xIcon}
              alt="hamburger menu x icon"
              onClick={() => setShowMenu(false)}
              css={css`
                position: absolute;
                top: 10px;
                right: 10px;
                width: 15px;
                height: 15px;
                @media (${breakpoints.tablet}) {
                  width: 20px;
                  height: 20px;
                }
              `}
            />
            <ul
              css={css`
                list-style-type: none;
                margin: 20px 20px;
                padding: 0;
                li {
                  margin-bottom: 15px;
                  font-weight: 500;
                  a {
                    text-decoration: none;
                    color: inherit;
                  }
                }
                @media (${breakpoints.tablet}) {
                  margin: 35px 20px;
                  li {
                    margin-bottom: 20px;
                    font-size: 20px;
                  }
                }
              `}
            >
              <li>
                <Link to="/about" onClick={onSelect}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={onSelect}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/story" onClick={onSelect}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/photos" onClick={onSelect}>
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={onSelect}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
