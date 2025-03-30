/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoPage from "./InfoPage";
import EmailLink from "./EmailLink";

const SubmissionsExceeded = () => {
  return (
    <InfoPage
      title="Submission Limit Reached"
      overrideStyles={css`
        text-align: center;
        .info-page-content {
          text-align: center;
        }
      `}
    >
      <div css={css``}>
        <p
          css={css`
            font-size: 16px;
            color: #555;
          `}
        >
          You have reached the maximum number of quote requests allowed in a
          24-hour period.
        </p>
        <p
          css={css`
            font-size: 16px;
            color: #555;
          `}
        >
          Please wait 24 hours before submitting another request. If you have
          urgent needs, feel free to contact us directly at {<EmailLink />}.
        </p>
      </div>
    </InfoPage>
  );
};

export default SubmissionsExceeded;
