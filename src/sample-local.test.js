const { Builder, By, Capabilities } = require("selenium-webdriver");

let driver;

QUnit.module("BStack demo test (local)", {
  beforeAll: () => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  },
  afterAll: async () => {
    await driver.quit();
  }
});

QUnit.test("local test", async (assert) => {
  await driver.get("http://bs-local.com:45454/");

  const title = await driver.getTitle();
  assert.ok(title.includes('BrowserStack Local'));
}, 10000000);
