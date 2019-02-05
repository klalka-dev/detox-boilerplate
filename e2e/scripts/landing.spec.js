const Action = require("../actions");
const Assert = require("../assertions");

const LandingPage = require("../pages/Landing.page");
const ButtonStates = require("../data/button-states");

describe("Landing", () => {
  beforeAll(async () => {
    await device.reloadReactNative();
  });

  it("should have title", async () => {
    await Assert.isVisible(LandingPage.title);
  });

  it("should have 3 cards", async () => {
    await Assert.isVisible(LandingPage.getLinkContainer(0));
    await Assert.isVisible(LandingPage.getLinkContainer(1));
    await Assert.isVisible(LandingPage.getLinkContainer(2));
  });

  it("should have 3 text links in card", async () => {
    await Assert.hasText(LandingPage.getLinkText(0), "Hello!");
    await Assert.hasText(LandingPage.getLinkText(1), "Click Me!");
    await Assert.hasText(LandingPage.getLinkText(2), "Leave Me Alone.");
  });

  it("should tap all links", async () => {
    await Action.tap(LandingPage.getLinkContainer(0));
    await Action.tap(LandingPage.getLinkContainer(1));
    await Action.tap(LandingPage.getLinkContainer(2));
  });

  it("Tapping button cycles through statuses", async () => {
    await Action.tap(LandingPage.getLinkButton(0, ButtonStates.DEFAULT));
    await Assert.isVisible(LandingPage.getLinkButton(0, ButtonStates.RED));
    await Action.tap(LandingPage.getLinkButton(0, ButtonStates.RED));
    await Assert.isVisible(LandingPage.getLinkButton(0, ButtonStates.GREEN));
    await Action.tap(LandingPage.getLinkButton(0, ButtonStates.GREEN));
    await Assert.isVisible(LandingPage.getLinkButton(0, ButtonStates.BLUE));

    await Action.tap(LandingPage.getLinkButton(1, ButtonStates.DEFAULT));
    await Assert.isVisible(LandingPage.getLinkButton(1, ButtonStates.RED));
    await Action.tap(LandingPage.getLinkButton(1, ButtonStates.RED));
    await Assert.isVisible(LandingPage.getLinkButton(1, ButtonStates.GREEN));
    await Action.tap(LandingPage.getLinkButton(1, ButtonStates.GREEN));
    await Assert.isVisible(LandingPage.getLinkButton(1, ButtonStates.BLUE));
  });

  it("The button status colors loop after reaching blue", async () => {
    await Action.tap(LandingPage.getLinkButton(0, ButtonStates.BLUE));
    await Assert.isVisible(LandingPage.getLinkButton(0, ButtonStates.RED));
  });
});
