const {
  name,
  title,
  helloButton,
  worldButton,
  greeting
} = require("../test-ids/landing-page");

class Landing {
  get container() {
    return by.id(name);
  }
  get title() {
    return by.id(title);
  }
  get helloButton() {
    return by.id(helloButton).withAncestor(this.container);
  }
  get worldButton() {
    return by.id(worldButton).withAncestor(this.container);
  }
  get greeting() {
    return by.id(greeting);
  }
}

module.exports = new Landing();
