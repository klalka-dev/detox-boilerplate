const getElement = require("../element");

/**
 * Checks if element is visible on screen
 * @param { strategy, matcher, ... } matcher
 */
const isVisible = async matcher => {
  await expect(getElement(matcher)).toBeVisible();
};

/**
 * Checks if element is not visible on screen
 * @param { strategy, matcher, ... } matcher
 */
const isNotVisible = async matcher => {
  await expect(getElement(matcher)).toBeNotVisible();
};

/**
 * Checks if element exists on current route
 * @param { strategy, matcher, ... } matcher
 */
const doesExist = async matcher => {
  await expect(getElement(matcher)).toExist();
};

/**
 * Checks if element does not exist on current route
 * @param { strategy, matcher, ... } matcher
 */
const doesNotExist = async matcher => {
  await expect(getElement(matcher)).toNotExist();
};

/**
 * Checks element text matches provided text
 * @param { strategy, matcher, ... } matcher
 * @param {string} text
 */
const hasText = async (matcher, text) => {
  await expect(getElement(matcher)).toHaveText(text);
};

/**
 * Checks element id matches provided id
 * @param { strategy, matcher, ... } matcher
 * @param {string} id
 */
const hasID = async (matcher, id) => {
  await expect(getElement(matcher)).toHaveId(id);
};

/**
 * Checks element label matches provided label
 * @param { strategy, matcher, ... } matcher
 * @param {string} label
 */
const hasLabel = async (matcher, label) => {
  await expect(getElement(matcher)).toHaveLabel(label);
};

/**
 * Checks element value matches provided value
 * @param { strategy, matcher, ... } matcher
 * @param {string} value
 */
const hasValue = async (matcher, value) => {
  await expect(getElement(matcher)).toHaveValue(value);
};

module.exports = {
  doesExist,
  doesNotExist,
  hasID,
  hasLabel,
  hasText,
  hasValue,
  isNotVisible,
  isVisible
};
