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

These Pages will contain information for all the elements on the page which is necessary for the element wrapper to have in order to build the proper element selector

```js
container: {
    strategy: "id",
    matcher: "Custom Test ID for Container Element"
  },
```

By creating a `strategy` and `matcher` property which can be passed to the `Actions` and `Assertions` wrappers the Locator for your desired element can be built and passed to the Detox API. More information on how this works will be available in the [Development Workflow](#Development-Workflow) section.

## `scripts`

All scripts are stored in the `e2e/scripts` folder. Any new files
must end with `.spec.js`.

> NOTE: There is a "spec" option that can be specified in under `detox` in the [`package.json`](./package.json#detox) but when I configure that to be `e2e/scripts` the scripts lose ability to see the detox global objects (`device`, `expect`, `element`). I believe this is a bug but will need to post on StackOverflow / Github Issues

# `test-ids`

The `e2e/test-ids` folder is created/maintained solely for automation purposes.
If you need to interact with an element you can create a new testID value for that
element.

In this example we have a [landing-page.js](./e2e/test-ids/landing-page.js) which represents the only page this App has. You can continue to following this pattern for as long as you need. There is one neat little trick I enjoy doing when the application is built out, after you've added navigation routes and components. If you want to this folder structure modified for a larger application, check out my [Dribble Collection App](/path/to/new/repo)

# `actions`

The `e2e/actions/` folder contains wrappers for the Detox actions. These can be
further built out split behavior between Android and iOS but this has not yet
been implemented.

# `assertions`

The `e2e/assertions/` folder contains wrappers for the Detox `expect`
assertions. They operate almost exactly like the default assertions but have
some default values for timeouts and visibility checks built in.

# `element`

This contains the logic for building the Detox Locator given our provided Page Object element data structure.

This is still under construction and will require more documentation after it's built

# Development Workflow

An explanation of how easy maintaining UI Tests can be with Detox by showing an example Development Workflow

I should put a blog post about this part here.

1. Take current app example (demo-react-native) and break out Links into reusable components
2. Add a new link
3. Create test-ids for the list
4. map over links and use index to specify elements (because Detox does not allow multiple elements to be returned)
5. Create two containers, with three links each, with same text
6. Show how you can use withAncestor to be specific and how you can interact with similar reusable components by chaining
