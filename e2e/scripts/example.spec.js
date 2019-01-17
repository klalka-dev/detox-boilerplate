const Pages = require("../pages");
const Actions = require("../actions");
const Assert = require("../assertions");

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await Assert.isVisible(Pages.Landing.container);
    await Assert.isVisible(Pages.Landing.title);
  });

  it("should show hello screen after tap", async () => {
    await Actions.tap(Pages.Landing.helloButton);
    await Assert.isVisible({ strategy: "text", matcher: "Hello!!!" });
  });

  it("should show world screen after tap", async () => {
    await Actions.tap(Pages.Landing.worldButton);
    await Assert.hasText(Pages.Landing.greeting, "World!!!");
  });
});
