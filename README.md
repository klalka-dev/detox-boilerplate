# A React Native boilerplate featuring Detox configuration

Customized the `demo-react-native` example app provided by the [Detox project](https://github.com/wix/Detox/tree/master/examples/demo-react-native) to show a simple folder structure for integrating E2E testing into your development workflow for React Native projects

# Quick Start

To get started with the default configurations, first you must have the following installed:

- MacOS 10.11+
- XCode v8.3+
- Homebrew
- Node v8+
- Applesimutils: `brew install applesimutils`
- Detox-cli: `npm install -g detox-cli`

Next, from project root run: `npm run test-ios`.

> NOTE: Android does not currently work. It is throwing an error. According to the documentation the Android experiences problems and is unreliable. All testing is done on iOS for now.

# Configurations

## Test Runner

We moved to Jest as our test runner. This is configured in [`package.json`](../package.json) under
`test-runner`.

## Reporter

This is configured in the [jest.json](./e2e/config/jest.json)

# Folder Structure

## `actions/`

The `e2e/actions/` folder contains wrappers for the Detox actions. This allows us to mutate behavior between interaction requests. This could be useful for diverging behavior based on things such as platform or current application state. To see all the available [Detox Device APIs](https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md) check out their site.

## `assertions/`

The `e2e/assertions/` folder contains wrappers for the Detox `expect`
assertions. This allows us to mutate behavior between interaction requests. This could be useful for scrolling elements into view before performing insertions or setting default variables like timeouts. To see all the available [Detox Expect APIs](https://github.com/wix/Detox/blob/master/docs/APIRef.Expect.md) check out their site.

List of folders inside the `e2e` directory and their purpose

## `config/`

This contains our `jest.json` file. For more information on Jest check out their [docs](https://jestjs.io/docs/en/configuration).

## `data/`

Contains the test data used in the testing of the app. This could be things such as usernames, passwords, API keys, etc.

## `pages/`

This boilerplate example uses a Page Object Model to organize the different views (pages, routes, screens, etc) of your application.

These pages are a collection of Elements, which are composed of a valid Detox Matcher and a locator String. It is a common practice to put a `testID` on the container for your page for chaining purposes. Below is a sample implementation of a container element.

```js
get container() {
  return by.id("Page Container");
}
```

These locators are passed to the `actions` and `assertions` wrappers which use this to build the corresponding Detox API call. See the [Actions](#Actions) and [Assertions](#Assertions) sections below.

For examples on how you can build [Detox Matchers](https://github.com/wix/Detox/blob/master/docs/APIRef.Matchers.md) visit their docs, or check out the sample [Development Workflow](#Development-Workflow) below.

## `scripts`

All scripts are stored in the `e2e/scripts` folder. Any new files
must end with `.spec.js`.

> NOTE: There is a "spec" option that can be specified in under `detox` in the [`package.json`](./package.json#detox) but when I configure that to be `e2e/scripts` the scripts lose ability to see the detox global objects (`device`, `expect`, `element`). I believe this is a bug but will need to post on StackOverflow / Github Issues

# `test-ids`

The `e2e/test-ids` folder is created/maintained solely for automation purposes.
If you need to interact with an element you can create a new testID value for that
element.

# Development Workflow

Here is a [blog post](https://www.kevinlalka.com/content/blogs/2019-02-07/easy-react-native-testing-with-detox/) on how I use Detox to test using a TDD Workflow
