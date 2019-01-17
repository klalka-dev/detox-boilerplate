A React Native boilerplate featuring Detox configuration

Customized the default example app provided by the Detox project to use a simple workflow for React Native projects

# Quick Start

If you are looking to get started as fast as possible, start here:

You must have the following installed:

- MacOS 10.11+
- XCode v8.3+
- Homebrew
- Node v8+
- Applesimutils: `brew install applesimutils`
- Detox-cli: `npm install -g detox-cli`

From project root, run `npm test`

# Configurations

## Test Runner

We are using Mocha as our test runner. This is configured in [`package.json`](../package.json) under
`test-runner`.

## Reporter

This is configured in the [mocha.opts](./e2e/config/mocha.opts)

# Pages

TBD

# Scripts

All scripts are stored in the `e2e/scripts` folder. Any new files
must end with `.spec.js`.

# Test-ids

The `e2e/test-ids` folder is created/maintained solely for automation purposes.
If you need to access an element you can create a new testID value for that
element. The naming pattern for this is as follows:

The test-id folder consists of four sub-folders which map to other folders in
the `src`. Those are: `components` and `routes`. Since all
elements for the app are stored in any one of these folders they can directly
map to the underlying test-id JSON object.

# Actions

The `e2e/actions/` folder contains wrappers for the Detox actions. These can be
further built out split behavior between Android and iOS but this has not yet
been implemented.

# Assertions

The `e2e/assertions/` folder contains wrappers for the Detox `expect`
assertions. They operate almost exactly like the default assertions but have
some default values for timeouts and visibility checks built in.
