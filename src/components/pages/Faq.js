/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import InfoPage from "../InfoPage";

const Faq = () => {
    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    const faqRender = faqData.map((item, index) => {
        return (
            <div key={index}>
                <p>{item.question}</p>
                <p>{item.answer}</p>
            </div>
        )
    });

    return (
        <InfoPage 
            title="Frequently Asked Questions"
            imgSrc="https://picsum.photos/300/250"
        >
            {faqRender}
        </InfoPage>
    )
};

export default Faq;
