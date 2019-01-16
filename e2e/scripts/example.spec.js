describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('Name'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('Hello Button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('World Button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});