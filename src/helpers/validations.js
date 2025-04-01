import { responseMapping } from "./constants";

////////////////////////////////
// Individual Validations
////////////////////////////////

const requiredValidationFilled = (value, responseOverride) => {
  const errorText = "Required";
  if (responseOverride || !value) return { label: errorText, error: true };
  return { label: errorText, error: false };
};

const checkValidEmail = (value, responseOverride) => {
  const errorText = "Valid email necessary";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(value)) {
    return { label: errorText, error: false };
  }
  return { label: errorText, error: true };
};

const checkOrderMinimum = (value, responseOverride) => {
  const errorText = "All orders must have 24 pieces at minimum";
  const intValue = parseInt(value, 10);
  if (intValue >= 24) {
    return {
      label: errorText,
      error: false,
    };
  }
  return { label: errorText, error: true };
};

const checkFileSize = (files, responseOverride) => {
  const errorText = "Total file size must be less than 25MB";
  const errorResponse = {
    label: errorText,
    error: true,
  };
  if (responseOverride) return errorResponse;
  if (files) {
    let sumSize = 0;
    for (let i = 0; i < files.length; i++) {
      const fileSize = files.item(i).size;
      sumSize += fileSize;
    }
    if (sumSize >= 25 * 1024 * 1024) {
      return errorResponse;
    }
  }
  return { label: errorText, error: false };
};

const checkFilesCount = (files, responseOverride) => {
  const errorText = "5 files maximum";
  const errorResponse = {
    label: errorText,
    error: true,
  };
  if (responseOverride) return errorResponse;
  if (files && files.length > 5) return errorResponse;
  return { label: errorText, error: false };
};

const checkFileTypes = (files, responseOverride) => {
  const errorText = "Only image files accepted";
  const errorResponse = {
    label: errorText,
    error: true,
  };
  if (responseOverride) return errorResponse;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const fileType = files[i].type.toLowerCase();
      if (!fileType.startsWith("image/")) {
        return errorResponse;
      }
    }
  }
  return { label: errorText, error: false };
};

////////////////////////////////
// Non-Validation Descriptions
////////////////////////////////

const descriptionText = () => {
  return {
    label:
      "Please include any details including art placement on garment, size breakdown information if you have it, or anything else you think we should know. If it starts feeling too complex, call us or send us an email. We would be happy to help!",
    error: false,
  };
};

////////////////////////////////
// Validation Organization
////////////////////////////////

const standardValidations = [
  { name: "requiredValidationFilled", validation: requiredValidationFilled },
];
const emailValidations = [
  { name: "checkValidEmail", validation: checkValidEmail },
];
const piecesValidations = [
  { name: "checkOrderMinimum", validation: checkOrderMinimum },
];
const artFileValidations = [
  { name: "checkFileSize", validation: checkFileSize },
  { name: "checkFilesCount", validation: checkFilesCount },
  { name: "checkFileTypes", validation: checkFileTypes },
];
const descriptionValidations = [
  { name: "descriptionText", validation: descriptionText },
];

const validations = {
  standard: standardValidations,
  email: emailValidations,
  pieces: piecesValidations,
  artFile: artFileValidations,
  description: descriptionValidations,
};

////////////////////////////////
// Run Validations
////////////////////////////////

const validate = (validation, value, responseOverride) => {
  const validationResult = validation(value, responseOverride);
  return [validationResult];
};

const checkOverride = (responseMap, field, validationName) => {
  if (responseMap) {
    const fieldCheck = responseMap.type === field;
    const validationCheck = responseMap.validationName === validationName;
    if (fieldCheck && validationCheck) return true;
  }
  return false;
};

export const handleValidations = (formData, responseStatus) => {
  const errors = {};

  for (const field in formData) {
    let fieldErrors = [];
    validations.standard.forEach((validation) => {
      const override = checkOverride(
        responseMapping[responseStatus],
        field,
        validation.name,
      );
      fieldErrors = fieldErrors.concat(
        validate(validation.validation, formData[field], override),
      );
    });
    if (validations[field]) {
      validations[field].forEach((validation) => {
        const override = checkOverride(
          responseMapping[responseStatus],
          field,
          validation.name,
        );
        fieldErrors = fieldErrors.concat(
          validate(validation.validation, formData[field], override),
        );
      });
    }
    errors[field] = fieldErrors;
  }

  return errors;
};
