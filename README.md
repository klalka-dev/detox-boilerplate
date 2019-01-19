# A React Native boilerplate featuring Detox configuration

Customized the `demo-react-native` example app provided by the [Detox project](https://github.com/wix/Detox/tree/master/examples/demo-react-native) to show a simple folder structure for integrating E2E testing into your development workflow for React Native projects

# Quick Start

If you are looking to get started as fast as possible, start here:

You must have the following installed:

- MacOS 10.11+
- XCode v8.3+
- Homebrew
- Node v8+
- Applesimutils: `brew install applesimutils`
- Detox-cli: `npm install -g detox-cli`

From project root, run `npm run test-ios`.

> NOTE: Android does not currently work. It is throwing an error. I have commented on StackOverflow and Detox issues but not sure what is wrong.

# Configurations

## Test Runner

We are using Mocha as our test runner. This is configured in [`package.json`](../package.json) under
`test-runner`.

## Reporter

This is configured in the [mocha.opts](./e2e/config/mocha.opts)

# Folders

List of folders inside the `e2e` directory and their purpose

## `pages`

This boilerplate example uses a [Page Object Model](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b) to organize the different views (pages, routes, screens, etc) of your application.

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

In this example we have a [landing-page.js](./e2e/test-ids/landing-page.js) which represents the only page this App has. You can continue to following this pattern for as long as you need. There is one neat little trick I enjoy doing when the application is built out, after you've added navigation routes and components. I plan on building out a solution which will use the [Dribble](http://developer.dribbble.com/v2/) API to do something fun. I will update this with a link when it is ready.

# `actions`

The `e2e/actions/` folder contains wrappers for the Detox actions. This allows us to mutate behavior between interaction requests. This could be useful for diverging behavior based on things such as platform or current application state. To see all the available [Detox Device APIs](https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md) check out their site.

# `assertions`

The `e2e/assertions/` folder contains wrappers for the Detox `expect`
assertions. This allows us to mutate behavior between interaction requests. This could be useful for scrolling elements into view before performing insertions or setting default variables like timeouts. To see all the available [Detox Expect APIs](https://github.com/wix/Detox/blob/master/docs/APIRef.Expect.md) check out their site.

# Development Workflow

An explanation of how easy maintaining UI Tests can be with Detox by showing an example Development Workflow

// get single component working

1. Build tests based on requirements and initial App state
2. Build Card Component
3. Create test-ids for the list
4. Hook up to Detox and get tests to pass

// next

1. Create second component
2. Show how chaining works

// exposing state via template literals on testID

1. Create onClick and action for link that highlights element
2. expose isHighlighted via testID
3. check for that prop in both states
