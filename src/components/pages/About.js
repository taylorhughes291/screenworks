/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { colorPalette, commonColors } from "../../themes";

const About = () => {
    return (
        <div css={css`
            width: 100%;
            height: 100vh;
            background-color: ${colorPalette.color2}
        `}>
            <div 
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 8px;
                    border: 2px solid ${colorPalette.color1};
                    border-radius: 6px;
                    background-color: ${commonColors.white};
                    margin: 15px 20px;

                `}
            >
                <h2 
                    css={css`
                        margin: 0 0 8px;
                    `}
                >
                    Family owned since 2004
                </h2>
                <img src="https://picsum.photos/300/250" alt="screenworks founding" />
                <p 
                    css={css`
                        margin: 10px 10px 2px;
                    `}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
};

export default About;
