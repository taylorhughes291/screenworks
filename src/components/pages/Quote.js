/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import InfoPage from "../InfoPage";

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
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <InfoPage title="Request a Quote">
      <form
        onSubmit={handleSubmit}
        css={css`
          //   background: white;
          padding: 20px;
          //   border-radius: 8px;
          //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          //   max-width: 500px;
          width: 100%;
        `}
      >
        <div
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
              width: 100%;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
            `}
          />
        </div>
        <div
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
              width: 100%;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
            `}
          />
        </div>
        <div
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
              width: 100%;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
            `}
          />
        </div>
        <div
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
              width: 100%;
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
            onChange={handleChange}
            css={css`
              width: 100%;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
            `}
          />
        </div>
        <div
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
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            css={css`
              width: 100%;
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
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
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
