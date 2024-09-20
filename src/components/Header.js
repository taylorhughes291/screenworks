/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import burgerMenu from '../assets/burger-menu.svg';

const Header = () => {
    return (
        <header css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid black;
            padding: 5px 10px;
        `}>
            <h1>Screenworks, Inc.</h1>
            <img src={burgerMenu} alt="hamburger menu" css={css`
                width: 30px;
                height: 30px;
            `}/>
            <nav css={css`display: none;`}>
                <ul css={css`
                    list-style-type: none
                `}>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Our Story</li>
                    <li>Photos</li>
                </ul>
            </nav>
      </header>
    )
}

export default Header;