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
    options: {
      tappable: true
    }
  },
  worldButton: {
    strategy: "id",
    matcher: worldButton,
    options: {
      tappable: true
    }
  },
  greeting: {
    strategy: "id",
    matcher: greeting
  }
};
