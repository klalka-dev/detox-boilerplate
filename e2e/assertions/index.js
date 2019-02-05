/**
 * Checks if element is visible on screen
 * @param { strategy, matcher, ... } matcher
 */
const isVisible = async matcher => {
  await expect(element(matcher)).toBeVisible();
};

/**
 * Checks if element is not visible on screen
 * @param { strategy, matcher, ... } matcher
 */
const isNotVisible = async matcher => {
  await expect(element(matcher)).toBeNotVisible();
};

/**
 * Checks if element exists on current route
 * @param { strategy, matcher, ... } matcher
 */
const doesExist = async matcher => {
  await expect(element(matcher)).toExist();
};

/**
 * Checks if element does not exist on current route
 * @param { strategy, matcher, ... } matcher
 */
const doesNotExist = async matcher => {
  await expect(element(matcher)).toNotExist();
};

/**
 * Checks element text matches provided text
 * @param { strategy, matcher, ... } matcher
 * @param {string} text
 */
const hasText = async (matcher, text) => {
  await expect(element(matcher)).toHaveText(text);
};

/**
 * Checks element id matches provided id
 * @param { strategy, matcher, ... } matcher
 * @param {string} id
 */
const hasID = async (matcher, id) => {
  await expect(element(matcher)).toHaveId(id);
};

/**
 * Checks element label matches provided label
 * @param { strategy, matcher, ... } matcher
 * @param {string} label
 */
const hasLabel = async (matcher, label) => {
  await expect(element(matcher)).toHaveLabel(label);
};

/**
 * Checks element value matches provided value
 * @param { strategy, matcher, ... } matcher
 * @param {string} value
 */
const hasValue = async (matcher, value) => {
  await expect(element(matcher)).toHaveValue(value);
};

export default {
  doesExist,
  doesNotExist,
  hasID,
  hasLabel,
  hasText,
  hasValue,
  isNotVisible,
  isVisible
};
