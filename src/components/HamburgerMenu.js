/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import burgerMenu from "../assets/burger-menu.svg";
import { css } from "@emotion/react";
import xIcon from "../assets/x-symbol.svg";
import { colorPalette, breakpoints } from "../themes";
import useOutsideClick from "../helpers/customHooks";
import Nav from "./Nav";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const onSelect = () => {
    setShowMenu(false);
  };

  useOutsideClick(menuRef, onSelect);

  return (
    <div
      css={css`
        @media (${breakpoints.desktop}) {
          display: none;
        }
      `}
    >
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
          <div
            ref={menuRef}
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
          >
            <Nav
              overrideStyles={css`
                ul {
                  display: block;
                  margin: 20px 20px;
                  padding: 0;
                  li {
                    margin-bottom: 15px;
                    font-weight: 500;
                  }
                }
                @media (${breakpoints.tablet}) {
                  ul {
                    margin: 35px 20px;
                    li {
                      margin-bottom: 20px;
                      font-size: 20px;
                    }
                  }
                }
              `}
              onSelect={onSelect}
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
            </Nav>
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
