/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import burgerMenu from '../assets/burger-menu.svg';
import screenworksLogo from '../assets/screenworks-logo.svg';
import { colorPalette, commonColors } from '../themes';

const Header = () => {
    const colorArray = Object.keys(colorPalette).map((item, index) => {
        return colorPalette[item]
    });

    const ColorPalleteRender = () => {
        return (<div css={css`
            display: flex;
            margin: 5px 0 5px 10px;
        `}>{colorArray.map((item, index) => {
            return (
                <div key={index} css={css`
                    width: 20px;
                    height: 20px;
                    background-color: ${item}
                `} />
            )
        })}</div>)
    }
    return (
        <header css={css`
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            border-bottom: 1px solid black;
            padding: 10px 10px 5px 5px;
            background-color: ${commonColors.white}
        `}>
            <div css={css`
                display: flex;
                flex-direction: column;
            `}>
                <img src={screenworksLogo} alt="screenworks logo" css={css`
                    max-width: 300px;
                `}/>
                <ColorPalleteRender />
            </div>
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