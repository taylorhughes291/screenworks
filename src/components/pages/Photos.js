/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import InfoPage from "../InfoPage";

const Photos = () => {
    const photoData = [
        {
            imgSrc: "https://picsum.photos/300/250",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            altLabel: "Lorem ipsum dolor sit amet"
        },
        {
            imgSrc: "https://picsum.photos/300/250",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            altLabel: "Lorem ipsum dolor sit amet"
        },
        {
            imgSrc: "https://picsum.photos/300/250",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            altLabel: "Lorem ipsum dolor sit amet"
        },
    ];

    const photoRender = photoData.map((item, index) => {
        return (
            <div 
                key={index} 
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                `}
            >
                <img src={item.imgSrc} alt={item.altLabel} />
                <p
                    css={css`
                        margin: 5px 0 0;
                        text-align: center;
                        font-size: 13px;
                    `}
                >{item.caption}</p>
            </div>
        )
    })
    return (
        <InfoPage 
            title="Photo Gallery"
        >
            {photoRender}
        </InfoPage>
    )
};

export default Photos;
