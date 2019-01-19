const {
  name,
  title,
  helloButton,
  worldButton,
  greeting
} = require("../test-ids/landing-page");

module.exports = {
  container: {
    strategy: "id",
    matcher: name
  },
  title: {
    strategy: "id",
    matcher: title
  },
  helloButton: {
    strategy: "id",
    matcher: helloButton,
    options: [
      {
        command: "withAncestor",
        element: {
          strategy: "id",
          matcher: name
        }
      }
    ]
  },
  worldButton: {
    strategy: "id",
    matcher: worldButton,
    options: [
      {
        command: "withAncestor",
        element: {
          strategy: "id",
          matcher: name
        }
      }
    ]
  },
  greeting: {
    strategy: "id",
    matcher: greeting
  }
};
