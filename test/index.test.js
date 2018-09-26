describe('Visual regession test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/pages/home.html');
    await page.waitFor(5000);
  }, 30000);

  it('should matches the existing snapshot', async () => {
    await page.setViewport({ width: 1920, height: 1080 });
    const screenshot = await page.screenshot({ fullPage: true });
    expect(screenshot).toMatchImageSnapshot();
  });
}, 30000);
