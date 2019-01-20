const { card, landingPage } = require("../test-ids");

class Landing {
  get container() {
    return by.id(landingPage.container);
  }
  get title() {
    return by.id(landingPage.title);
  }

  getCardLinkContainer(index = 0) {
    return by.id(card.item.container(index));
  }
  getCardLinkText(index = 0) {
    return by
      .id(card.item.linkText)
      .withAncestor(this.getCardLinkContainer(index));
  }
}

module.exports = new Landing();
