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

  it("should have link card", async () => {
    await Assert.isVisible(LandingPage.card);
  });

  it("should have 2 links in card", async () => {
    await Assert.isVisible(LandingPage.linkOne);
    await Assert.isVisible(LandingPage.linkTwo);
  });

  it("should tap both links", async () => {
    await Action.tap(LandingPage.linkOne);
    await Action.tap(LandingPage.linkTwo);
  });
});
