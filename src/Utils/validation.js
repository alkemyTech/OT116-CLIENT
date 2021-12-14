const regExp = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  password: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{6,}$/i,
  url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
};
const isObject = (value) => typeof value === "object";
const isFile = (file) => isObject(file) && file.name && file.size;
const validValue = (regExp, value) => regExp.test(value);
const isValidFile = (acceptTypes, file) =>
  isFile(file) && acceptTypes.some((acceptType) => file.type === acceptType);
const notHasValue = (values, key) => !values[key];

const validateRequiredValues = (values, errors, requiredValues) => {
  const requiredKeys = Object.keys(requiredValues);
  requiredKeys.forEach((value) => hasRequiredError(values, errors, value));
};

const hasRequiredError = (values, errors, key) => {
  if (notHasValue(values, key)) {
    errors[key] = "Dato Obligatorio";
    return true;
  }
  return false;
};

const isValidImage = (value) => {
  const validImage = value.type;
  if (validImage === "image/jpeg" || validImage === "image/png") {
    return true;
  } else {
    return false;
  }
};

const isValidSocialMedia = (value) => {
  if (
    value.includes("https://www.facebook.com/") ||
    value.includes("https://www.instagram.com/") ||
    value.includes("https://www.twitter.com/")
  ) {
    return true;
  } else {
    return false;
  }
};

const isValidNameMembers = (value) => {
  if (value.length < 3) {
    return true;
  } else {
    return false;
  }
};
const listHasValues = (list) => list && list.length > 0;

export {
  regExp,
  validValue,
  isValidFile,
  isFile,
  hasRequiredError,
  notHasValue,
  validateRequiredValues,
  isValidImage,
  isValidSocialMedia,
  isValidNameMembers,
  listHasValues,
};
