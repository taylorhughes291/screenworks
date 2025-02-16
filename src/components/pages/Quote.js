/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import InfoPage from "../InfoPage";
import { colorPalette } from "../../themes";
import { handleValidations } from "../../helpers/validations";
import { acceptedFileTypes } from "../../helpers/constants";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pieces: "",
    garments: "",
    artFile: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const validations = handleValidations(formData);
  console.log(validations);

  const inputFileTypes = acceptedFileTypes.join(",");

  return (
    <InfoPage title="Request a Quote">
      <form
        onSubmit={handleSubmit}
        css={css`
          display: flex;
          flex-direction: column;
          padding: 20px;
          div.quote-field-container {
            display: flex;
            flex-direction: column;
          }
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
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
          <input
            type="number"
            name="pieces"
            value={formData.pieces}
            onChange={handleChange}
            required
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
          <select
            name="garments"
            value={formData.garments}
            onChange={handleChange}
            required
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
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
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
            cursor: pointer;
            &:hover {
              background-color: #0056b3;
            }
          `}
        >
          Submit
        </button>
      </form>
    </InfoPage>
  );
};

export default Quote;
