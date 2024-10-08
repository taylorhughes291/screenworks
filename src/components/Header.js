/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import screenworksLogo from '../assets/screenworks-logo.svg';
import { colorPalette, commonColors } from '../themes';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                    <img src={screenworksLogo} alt="screenworks logo" css={css`
                        max-width: 300px;
                    `}/>
                </Link>
                <ColorPalleteRender />
            </div>
            <HamburgerMenu />
      </header>
    )
}

export default Header;