const { card, landingPage } = require("../test-ids");

class Landing {
  get container() {
    return by.id(landingPage.container);
  }
  get title() {
    return by.id(landingPage.title);
  }

  getLinkContainer(index = 0) {
    return by.id(card.item.container(index));
  }
  getLinkText(index = 0) {
    return by.id(card.item.linkText).withAncestor(this.getLinkContainer(index));
  }
  getLinkButton(index = 0, status) {
    return by
      .id(card.item.button(status))
      .withAncestor(this.getLinkContainer(index));
  }
}

module.exports = new Landing();
