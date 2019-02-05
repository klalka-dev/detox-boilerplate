/**
 * Scrolls the screen X pixels in provided direction
 * @param {Detox.Matchers} matcher
 * @param {number} pixel
 * @param {Detox.direction} direction
 */
const scroll = async (matcher, pixel, direction) =>
  element(matcher).scroll(pixel, direction);

/**
 * Scrolls the provided element into the viewport
 * @param {Detox.Matchers} matcher
 * @param {Detox.direction} direction
 * @param {number} speed
 * @param {Detox.Matchers} scrollViewMatcher
 */
const scrollIntoView = async (
  matcher,
  direction,
  speed,
  scrollViewMatcher = "scrollView"
) =>
  waitFor(getElement(matcher))
    .toBeVisible()
    .whileElement(element(scrollViewMatcher))
    .scroll(speed, direction);

/**
 * Swipe in provided direction
 * @param {Detox.Matchers} scrollMatcher
 * @param {Detox.direction} direction
 */
const swipe = (scrollMatcher, direction) =>
  element(scrollMatcher).swipe(direction);

/**
 * Taps element
 * @param {Detox.Matchers} matcher
 */
const tap = async matcher => element(matcher).tap();

/**
 * Replaces text on provided textfield
 * @param {Detox.Matchers} ele
 * @param {string} text
 */
const replaceText = async (ele, text) => element(ele).replaceText(text);

/**
 * Clears provided textfield
 * @param {Detox.Matchers} ele
 */
const clearText = async ele => replaceText(ele, "");

/**
 * Waits for element to be visible on screen
 * @param {Detox.Matchers} matcher
 * @param {number} timeout
 */
const waitForVisible = async (matcher, timeout = 5000) =>
  waitFor(element(matcher))
    .toBeVisible()
    .withTimeout(timeout);

/**
 * Waits for element to not be visible on screen
 * @param {Detox.Matchers} matcher
 * @param {number} timeout
 */
const waitForNotVisible = async (matcher, timeout = 5000) =>
  waitFor(element(matcher))
    .toBeNotVisible()
    .withTimeout(timeout);

/**
 * Launches the app, reinstalls if true is provided
 * @param {boolean} uninstall
 */
const launch = async uninstall => {
  const notifications = "NO";
  const location = "always";
  const newInstance = true;

  if (uninstall) {
    await device.uninstallApp();
    await device.installApp();
  }
  await device.launchApp({
    permissions: {
      notifications,
      location
    },
    newInstance
  });
};

export default {
  clearText,
  launch,
  replaceText,
  scroll,
  scrollIntoView,
  swipe,
  tap,
  waitForVisible,
  waitForNotVisible
};
