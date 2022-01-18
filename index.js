const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  // YOUR CODE STARTS
  const page = await browser.newPage();


  await page.goto("https://www.netflix.com/login");
  // await page.screenshot()
  await page.fill("text=Email or phone number", "test@email.com");
  await page.fill("text=Password", "randompassword");
  await page.keyboard.press('Enter', {delay: 1500});

  await expect(page).toHaveURL("https://www.netflix.com/browse")

  // YOUR CODE ENDS
})();
