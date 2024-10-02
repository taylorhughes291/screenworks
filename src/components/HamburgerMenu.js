/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import burgerMenu from '../assets/burger-menu.svg';
import {css} from '@emotion/react';

const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
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
        </>
    )
}

export default HamburgerMenu;
