import testIDs from "../test-ids";

class Landing {
  get container() {
    return by.id(testIDs.landingPage.container);
  }
  get title() {
    return by.id(testIDs.landingPage.title);
  }

  getLinkContainer(index = 0) {
    return by.id(testIDs.card.item.container(index));
  }
  getLinkText(index = 0) {
    return by
      .id(testIDs.card.item.linkText)
      .withAncestor(this.getLinkContainer(index));
  }
  getLinkButton(index = 0, status) {
    return by
      .id(testIDs.card.item.button(status))
      .withAncestor(this.getLinkContainer(index));
  }
}

export default new Landing();
