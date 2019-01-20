const Action = require("../actions");
const Assert = require("../assertions");

const LandingPage = require("../pages/Landing.page");

describe("Landing", () => {
  before(async () => {
    await device.reloadReactNative();
  });

  it("should have title", async () => {
    await Assert.isVisible(LandingPage.title);
  });

  it("should have 3 cards", async () => {
    await Assert.isVisible(LandingPage.getCardLinkContainer(0));
    await Assert.isVisible(LandingPage.getCardLinkContainer(1));
    await Assert.isVisible(LandingPage.getCardLinkContainer(2));
  });

  it("should have 3 text links in card", async () => {
    await Assert.hasText(LandingPage.getCardLinkText(0), "Hello!");
    await Assert.hasText(LandingPage.getCardLinkText(1), "Click Me!");
    await Assert.hasText(LandingPage.getCardLinkText(2), "Leave Me Alone.");
  });

  it("should tap all links", async () => {
    await Action.tap(LandingPage.getCardLinkContainer(0));
    await Action.tap(LandingPage.getCardLinkContainer(1));
    await Action.tap(LandingPage.getCardLinkContainer(2));
  });
});
