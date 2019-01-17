const testids = require('../test-ids')

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id(testids.routes.landing.name))).toBeVisible();
    await expect(element(by.id(testids.routes.landing.title))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id(testids.routes.landing.helloButton)).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id(testids.routes.landing.worldButton)).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});