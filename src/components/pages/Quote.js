/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import InfoPage from "../InfoPage";
import LoadingWrapper from "../LoadingWrapper";
import CtaButton from "../CtaButton";
import { colorPalette } from "../../themes";
import { handleValidations } from "../../helpers/validations";
import {
  acceptedFileTypes,
  defaultQuoteFormData,
} from "../../helpers/constants";
import { handleQuoteSubmit } from "../../helpers/requests";

const Quote = () => {
  const [formData, setFormData] = useState(defaultQuoteFormData);
  const [showViolations, setShowViolations] = useState(false);
  const [validations, setValidations] = useState({
    name: [],
    email: [],
    pieces: [],
    garments: [],
    artFile: [],
    description: [],
  });
  const [responseStatus, setResponseStatus] = useState(-1);
  const [requestPending, setRequestPending] = useState(false);

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
        setRequestPending(false);
        setResponseStatus(res);
      });
    } else {
      setShowViolations(true);
    }
  };

  const handleAnotherQuote = () => {
    setFormData(defaultQuoteFormData);
    setShowViolations(false);
  };

  if (responseStatus === 200) {
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
            onClick={handleAnotherQuote}
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
  }

  const inputFileTypes = acceptedFileTypes.join(",");

  const renderViolations = (inputName) => {
    return validations[inputName].map((item, index) => {
      const styleViolation = item.error && showViolations;
      return (
        <p
          key={index}
          css={css`
            margin: 0 0 5px;
            font-size: 13px;
            ${styleViolation && `color: ${colorPalette.color1};`}
          `}
        >
          {item.label}
        </p>
      );
    });
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
    <InfoPage title="Request a Quote">
      <form
        onSubmit={handleSubmit}
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 20px 20px;
          div.quote-field-container {
            display: flex;
            flex-direction: column;
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
            className="quote-field-container"
            css={css`
              margin-bottom: 15px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              Name:
            </label>
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
            css={css`
              margin-bottom: 15px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              Email:
            </label>
            {renderViolations("email")}
            <input
              type="email"
              name="email"
              value={formData.email}
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
            css={css`
              margin-bottom: 15px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              How many pieces:
            </label>
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
            css={css`
              margin-bottom: 15px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              Garments:
            </label>
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
              <option value="tshirt">T-Shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="jacket">Jacket</option>
            </select>
          </div>
          <div
            className="quote-field-container"
            css={css`
              margin-bottom: 15px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              Art File:
            </label>
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
              accept={inputFileTypes}
            />
          </div>
          <div
            className="quote-field-container"
            css={css`
              margin-bottom: 30px;
            `}
          >
            <label
              css={css`
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
              `}
            >
              Description:
            </label>
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
