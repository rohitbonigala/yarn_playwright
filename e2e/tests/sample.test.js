import { chromium } from 'playwright';


describe('Github login sample test', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false, slowMo: 1000
    });
    page = await browser.newPage();
    await page.goto('https://github.com/', {
      waitUntil: 'networkidle', timeout: 500000
    });
  });
  afterAll(async () => {
    await browser.close();
  });

  // to check the presence of policy text.
  test('login into github', async () => {

    await page.locator('text=Sign in').click();

    //click login and enter the username 
    await page.locator('input[id="login_field"]').click();
    await page.locator('input[id="login_field"]').fill('rohitbonigala09@gmail.com');

    //click password and enter the password 
    await page.locator('input[name="password"]').click();
    await page.fill('input[name="password"]', '#####');


    // //click sign in
    // await page.locator('input[name="commit"]').click();

    // //to check the header text is visible in the dashboard
    
    // //to create a new repository...   
    // await page.locator('[aria-label="Create new…"]').click();

    // await page.locator('text=New repository').click();
    


    // //fill the details for creating the new repo..
    // await page.locator("label[for='repository_name']").fill('hello');

    // await page.locator("label[for='repository_description']").fill('hello world');

    // await page.locator('[aria-describedby="private-description upgrade-private-description"]').click();

    // //click create repository --> submit
    // await page.locator('text=Create repository').click();
    
    // //take a screenshot of your repository -- fullpage.
    // await page.screenshot({ path: 'xyz.png', fullPage: true });

    // // Sign out.
    // await page.locator('[aria-label="View profile and more"]').click();
    // await page.locator('button[role="menuitem"]:has-text("Sign out")').click();

});
});
