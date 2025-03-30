export const acceptedFileTypes = [
  ".pdf",
  ".jpg",
  ".jpeg",
  ".png",
  ".tiff",
  ".tif",
  ".svg",
  ".webp",
  ".heic",
];

export const responseMapping = {
  400: {
    title: "File Missing",
    type: "artFile",
    validationName: "requiredValidationFilled",
  },
  415: {
    title: "Invalid File Type",
    type: "artFile",
    validationName: "checkFileTypes",
  },
  413: {
    title: "File Too Large",
    type: "artFile",
    validationName: "checkFileSize",
  },
  422: {
    title: "Too Many Files",
    type: "artFile",
    validationName: "checkFilesCount",
  },
};

export const defaultQuoteFormData = {
  name: "",
  email: "",
  pieces: "",
  garments: "",
  artFile: null,
  description: "",
};

export const defaultViolations = {
  name: [],
  email: [],
  pieces: [],
  garments: [],
  artFile: [],
  description: [],
};
