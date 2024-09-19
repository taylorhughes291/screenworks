import {css} from '@emotion/css';

const Header = () => {
    return (
        <header>
            <h1>Screenworks, Inc.</h1>
            <nav>
                <ul css={css`
                    color: red;
                    text-decoration: none;
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