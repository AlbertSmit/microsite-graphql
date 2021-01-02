/**
 * Required for slugs to properly function.
 * (Capitalized slugs do not seem to work).
 * ------
 * @param {string} string to capitalize.
 */
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export default capitalizeFirstLetter;
