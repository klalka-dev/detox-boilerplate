This project will be a Detox boilerplate

For now I am trying to create a decent app for testing purposes

I had problems with the react native version but after a bunch of deleting cache, resetting terminal windows, and essentially turning everything off and on again the iOS app is building and the tests are running.

Android still has problems and will not build

First Android Error:

FAILURE: Build failed with an exception.

- Where:
  Build file '/Users/kevinlalka/Personal/detox-boilerplate/node_modules/detox/android/detox/build.gradle' line: 2

- What went wrong:
  A problem occurred evaluating project ':detox'.

  > Plugin with id 'kotlin-android' not found.

- Try:
  Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

- Get more help at https://help.gradle.org

BUILD FAILED in 0s

Since Detox is very poor at supporting Android we will skip for now. I cannot recommend using Detox if you have the need to test an Android application.

Adding in boilerplate recommendations now

e2e folder

- pages
- components?
- element factory?
- scripts
- data
- actions
- assertions
- testids
