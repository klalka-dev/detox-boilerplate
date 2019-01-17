const landing = require("../test-ids/routes/landing");

module.exports = {
  container: {
    strategy: "id",
    matcher: landing.name
  },
  title: {
    strategy: "id",
    matcher: landing.title
  },
  helloButton: {
    strategy: "id",
    matcher: landing.helloButton,
    options: {
      tappable: true
    }
  },
  worldButton: {
    strategy: "id",
    matcher: landing.worldButton,
    options: {
      tappable: true
    }
  },
  greeting: {
    strategy: "id",
    matcher: landing.greeting
  }
};
