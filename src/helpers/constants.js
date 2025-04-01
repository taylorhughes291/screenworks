export const responseMapping = {
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
  phone: "",
  pieces: "",
  garments: "",
  garmentColor: "",
  artFile: null,
  description: "",
};

export const defaultViolations = {
  name: [],
  email: [],
  phone: [],
  pieces: [],
  garments: [],
  garmentColor: [],
  artFile: [],
  description: [],
};
