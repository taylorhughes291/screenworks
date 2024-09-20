/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Hero = ({overrideStyles}) => {
    return (
        <div css={css`
            background: red;
            width: 100%;
            height: 100%;
            ${overrideStyles}
        `}>
            Hero
        </div>
    )
};

export default Hero;