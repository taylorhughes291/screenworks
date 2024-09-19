/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Header = () => {
    return (
        <header css={css`
            width: 100%;
            display: flex;
            
        `}>
            <h1>Screenworks, Inc.</h1>
            <nav>
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