////////////////////////////////
// Individual Validations
////////////////////////////////

const requiredValidationFilled = (value) => {
  if (value) return "";
  return "This is a required field.";
};

const checkValidEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(value)) {
    return "";
  }
  return "Please enter a valid email.";
};

////////////////////////////////
// Validation Organization
////////////////////////////////

const standardValidations = [requiredValidationFilled];
const emailValidations = [checkValidEmail];

const validations = {
  standard: standardValidations,
  email: emailValidations,
};

////////////////////////////////
// Run Validations
////////////////////////////////

const validate = (validation, value) => {
  const validationResult = validation(value);
  if (validationResult) {
    return [validationResult];
  }
  return [];
};

export const handleValidations = (formData) => {
  const errors = {};

  for (const field in formData) {
    let fieldErrors = [];
    standardValidations.forEach((validation) => {
      fieldErrors = fieldErrors.concat(validate(validation, formData[field]));
    });
    if (validations[field]) {
      validations[field].forEach((validation) => {
        fieldErrors = fieldErrors.concat(validate(validation, formData[field]));
      });
    }
    errors[field] = fieldErrors;
  }

  return errors;
};
