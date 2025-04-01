/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import InfoPage from "../InfoPage";
import LoadingWrapper from "../LoadingWrapper";
import { colorPalette, breakpoints } from "../../themes";
import { handleValidations } from "../../helpers/validations";
import {
  defaultQuoteFormData,
  defaultViolations,
} from "../../helpers/constants";
import { handleQuoteSubmit } from "../../helpers/requests";
import EmailLink from "../EmailLink";
import QuoteSuccess from "../QuoteSuccess";
import { handleSubmissionCount } from "../../helpers/localStorage";
import SubmissionsExceeded from "../SubmissionsExceeded";

const labelStyles = css`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const quoteFieldContainerStyles = css`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Quote = () => {
  const [formData, setFormData] = useState(defaultQuoteFormData);
  const [showViolations, setShowViolations] = useState(false);
  const [validations, setValidations] = useState(defaultViolations);
  const [responseStatus, setResponseStatus] = useState(-1);
  const [requestPending, setRequestPending] = useState(false);
  const [submissionsAllowed, setSubmissionsAllowed] = useState(
    handleSubmissionCount(true),
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  useEffect(() => {
    const formValidations = handleValidations(formData, responseStatus);
    setValidations(formValidations);
  }, [formData, responseStatus]);

  useEffect(() => {
    setResponseStatus(-1);
    setSubmissionsAllowed(handleSubmissionCount(true));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    let totalViolations = [];
    Object.values(validations).forEach((value) => {
      const errors = value.filter((item) => {
        return item.error;
      });
      totalViolations = totalViolations.concat(errors);
    });
    if (!totalViolations.length) {
      // Handle form submission logic here
      setRequestPending(true);
      const eventFormData = new FormData(e.target);
      await handleQuoteSubmit(eventFormData).then((res) => {
        handleSubmissionCount(false, res);
        setRequestPending(false);
        setResponseStatus(res);
        setShowViolations(true);
      });
    } else {
      setShowViolations(true);
    }
  };

  const handleAnotherQuote = () => {
    setFormData(defaultQuoteFormData);
    setShowViolations(false);
  };

  if (responseStatus === 400) {
    window.location.href = "/error";
  }

  if (responseStatus === 200) {
    return <QuoteSuccess onClick={handleAnotherQuote} />;
  }

  if (!submissionsAllowed) {
    return <SubmissionsExceeded />;
  }

  const renderViolations = (inputName) => {
    const rules = validations[inputName].map((item, index) => {
      const styleViolation = item.error && showViolations;
      const isLast = index === validations[inputName].length - 1;
      return (
        <span
          key={index}
          css={css`
            ${styleViolation && `color: ${colorPalette.color1};`}
          `}
        >
          {item.label}
          {isLast ? "." : ", "}
        </span>
      );
    });
    return (
      <p
        css={css`
          margin: 0 0 7px 3px;
          font-size: 13px;
          line-height: 16px;
          vertical-align: top;
        `}
      >
        {rules}
      </p>
    );
  };

  const renderLoadingChildren = (
    <div
      css={css`
        text-align: center;
      `}
    >
      <p>Submitting...</p>
      <p>Please don't navigate away just yet...</p>
    </div>
  );

  return (
    <InfoPage
      title="Request a Quote"
      overrideStyles={css`
        .info-page-content {
          width: 100%;
        }
      `}
    >
      <form
        onSubmit={handleSubmit}
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 20px 20px;
          width: 100%;
          @media (${breakpoints.tablet}) {
            width: 600px;
          }
          @media (${breakpoints.desktop}) {
            width: 750px;
          }
        `}
        encType="multipart/form-data"
      >
        <LoadingWrapper
          isLoaded={!requestPending}
          loadingChildren={renderLoadingChildren}
          overrideStyles={css`
            margin-top: 0;
          `}
        >
          <div
            css={css`
              margin-bottom: 20px;
              max-width: 500px;
              margin: 0 auto 20px;
            `}
          >
            <h3
              css={css`
                margin: 0;
                text-align: center;
                font-size: 14px;
              `}
            >
              You can submit up to three quote requests in a 24 hour period. We
              will get back to you with your quote within 3 business days. If
              your order is more complex, go ahead and email us at{" "}
              {<EmailLink />}.
            </h3>
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Name:</label>
            {renderViolations("name")}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
            />
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Email:</label>
            {renderViolations("email")}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
            />
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Phone Number:</label>
            {renderViolations("phone")}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(310) 555-1234"
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
              minLength={10}
            />
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>How many pieces:</label>
            {renderViolations("pieces")}
            <input
              type="number"
              name="pieces"
              value={formData.pieces}
              onChange={handleChange}
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
            />
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Garments:</label>
            {renderViolations("garments")}
            <select
              name="garments"
              value={formData.garments}
              onChange={handleChange}
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
            >
              <option value="">Select a garment</option>
              <option value="youth-short-sleeve-tshirt">
                Youth Short Sleeve T-Shirt
              </option>
              <option value="short-sleeve-tshirt">Short Sleeve T-Shirt</option>
              <option value="ladies-short-sleeve-tshirt">
                Ladies Short Sleeve T-Shirt
              </option>
              <option value="ladies-vneck-tshirt">Ladies V-Neck T-Shirt</option>
              <option value="long-sleeve-tshirt">Long Sleeve T-Shirt</option>
              <option value="tank-top">Tank Top</option>
              <option value="youth-hooded-sweatshirt">
                Youth Hooded Sweatshirt
              </option>
              <option value="youth-zip-hooded-sweatshirt">
                Youth Zip Hooded Sweatshirt
              </option>
              <option value="pullover-hooded-sweatshirt">
                Pullover Hooded Sweatshirt
              </option>
              <option value="zip-hooded-sweatshirt">
                Zip Hooded Sweatshirt
              </option>
            </select>
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Garment Color:</label>
            {renderViolations("garmentColor")}
            <input
              type="text"
              name="garmentColor"
              value={formData.garmentColor}
              onChange={handleChange}
              placeholder="White, Black, Red, etc."
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
            />
          </div>
          <div
            className="quote-field-container"
            css={quoteFieldContainerStyles}
          >
            <label css={labelStyles}>Art File:</label>
            {renderViolations("artFile")}
            <input
              type="file"
              name="artFile"
              multiple
              onChange={handleChange}
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              `}
              accept="image/*"
            />
          </div>
          <div
            className="quote-field-container"
            css={css`
              ${quoteFieldContainerStyles};
              margin-bottom: 30px;
            `}
          >
            <label css={labelStyles}>Description:</label>
            {renderViolations("description")}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              css={css`
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
                resize: vertical;
              `}
            />
          </div>
          <button
            type="submit"
            css={css`
              padding: 10px;
              background-color: ${colorPalette.color4};
              border: 1px solid ${colorPalette.color5};
              border-radius: 4px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              &:hover {
                background-color: #0056b3;
              }
            `}
          >
            Submit
          </button>
        </LoadingWrapper>
      </form>
    </InfoPage>
  );
};

export default Quote;
