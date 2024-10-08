import { Builder, By, until } from 'selenium-webdriver';


// Import pages
import { LoginPage } from '../pages/LoginPage.js';

describe('Login Feature', function () {
    this.timeout(30000); // Set a higher timeout for Selenium 
    let driver;

    before(async function() {
        // Launch the browser
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        // Close the browser
        if (driver) {
            await driver.quit();
        }
    });

    it('should validate the fields for the login are valid', async function() {
        // Create an instance of the LoginPage
        const loginPage = new LoginPage(driver);

        // Navigate to the login page
        await loginPage.open();

        // Validate email field
        await loginPage.validateEmailField();

        // Validate password field
        await loginPage.validatePasswordField();
    });

    it('should login successfully as a non-paid user and request payment', async function() {
        // Create an instance of the LoginPage
        const loginPage = new LoginPage(driver);

        // Navigate to the login page
        await loginPage.open();

        // Perform login
        await loginPage.login('testdatatemporal@gmail.com', 'Test123456$');

        // Validate login success
        await loginPage.validatePaymentRequest();
    });

//    it('should login successfully as a paid user', async function() {
//        // Create an instance of the LoginPage
//        const loginPage = new LoginPage(driver);
//
//        // Navigate to the login page
//        await loginPage.open();
//
//        // Perform login
//        await loginPage.login('testdatatemporal@example.com', 'Test123456$');
//
//        // Validate login success
//        await loginPage.validateLoginSuccess();
//    })
});