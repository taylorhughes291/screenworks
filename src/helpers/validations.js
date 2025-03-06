import { acceptedFileTypes, responseMapping } from "./constants";

////////////////////////////////
// Individual Validations
////////////////////////////////

const requiredValidationFilled = (value, responseOverride) => {
  if (responseOverride || !value) return { label: "Required", error: true };
  return { label: "Required", error: false };
};

const checkValidEmail = (value, responseOverride) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(value)) {
    return { label: "Valid email required.", error: false };
  }
  return { label: "Please enter a valid email.", error: true };
};

const checkOrderMinimum = (value, responseOverride) => {
  const intValue = parseInt(value, 10);
  if (intValue >= 24) {
    return {
      label: "All orders must have 24 pieces at minimum.",
      error: false,
    };
  }
  return { label: "All orders must have 24 pieces at minimum.", error: true };
};

const checkFileSize = (files, responseOverride) => {
  if (files) {
    let sumSize = 0;
    for (let i = 0; i < files.length; i++) {
      const fileSize = files.item(i).size;
      sumSize += fileSize;
    }
    if (sumSize >= 25 * 1024 * 1024) {
      return { label: "Total file size must be less than 25MB.", error: true };
    }
  }
  return { label: "Total file size must be less than 25MB.", error: false };
};

const checkFilesCount = (files, responseOverride) => {
  if (files && files.length > 5)
    return { label: "You may only upload up to 5 files.", error: true };
  return { label: "You may only upload up to 5 files.", error: false };
};

const checkFileTypes = (files, responseOverride) => {
  const errorReponse = {
    label: "You may only attach PDF or Image files.",
    error: true,
  };
  if (responseOverride) return errorReponse;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const extension = "." + files[i].name.split(".").pop().toLowerCase();
      if (!acceptedFileTypes.includes(extension)) {
        return errorReponse;
      }
    }
  }
  return { label: "We accept PDF or any image files.", error: false };
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

const validations = {
  standard: standardValidations,
  email: emailValidations,
  pieces: piecesValidations,
  artFile: artFileValidations,
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
