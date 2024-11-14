/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import InfoPage from "../InfoPage"

const Contact = () => {
    return (
        <InfoPage title="Contact Us" imgSrc="https://picsum.photos/300/250" description="" >
            <div 
                css={css`
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px 16px;
                    h3 {
                        font-size: 16px;
                    }
                `}
            >
                <h3 
                    css={css`
                        margin: 0;
                    `}
                >
                    Phone: (310) 532-7654
                </h3>
                <h3>Email: <a href="mailto:screenworkscheri@sbcglobal.net">screenworkscheri@sbcglobal.net</a></h3>
                <h3>Screenworks, Inc.<br/>5432 135th St<br/>Gardena CA 98765</h3>
            </div>
        </InfoPage>
    )
};

export default Contact;
