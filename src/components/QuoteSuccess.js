/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "./InfoPage";
import CtaButton from "./CtaButton";

const QuoteSuccess = ({ onClick }) => {
  return (
    <InfoPage title="Quote Request Sent!">
      <p
        css={css`
          text-align: center;
          margin-bottom: 0;
        `}
      >
        Thank you for your request. We have successfully received your quote
        request and will get back to you shortly.
      </p>
      <p
        css={css`
          margin-bottom: 40px;
        `}
      >
        Need to build another order?&nbsp;
        <span
          css={css`
            color: #007bff; /* A good link color */
            cursor: pointer;
            text-decoration: underline;
          `}
          onClick={onClick}
        >
          Start another quote
        </span>
      </p>
      <CtaButton
        displayText="Back to the Homepage"
        href="/"
        overrideStyles={css`
          margin-bottom: 30px;
        `}
      />
    </InfoPage>
  );
};

export default QuoteSuccess;
