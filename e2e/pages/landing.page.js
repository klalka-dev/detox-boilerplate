const {
  card,
  container,
  linkOne,
  linkTwo,
  title
} = require("../test-ids/landing-page");

class Landing {
  get container() {
    return by.id(container);
  }
  get title() {
    return by.id(title);
  }
  get card() {
    return by.id(card);
  }
  get linkOne() {
    return by.id(linkOne);
  }
  get linkTwo() {
    return by.id(linkTwo);
  }
}

module.exports = new Landing();
