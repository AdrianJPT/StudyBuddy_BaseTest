import { Builder, By, until } from 'selenium-webdriver';
import { should } from 'chai';
should(); // Initialize should

// Import pages
import { RegistrationPage } from '../pages/RegistrationPage.js';

describe('Registration Feature', function () {
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

    it('should not register with an already registered account', async function() {
        // Create an instance of the RegistrationPage
        const registrationPage = new RegistrationPage(driver);

        // Navigate to the registration page
        await registrationPage.open();

        // Perform registration
        await registrationPage.register('testdatatemporal@gmail.com', 'Test123456$');

        // Validate registration failure
        await registrationPage.validateRegistrationFailure();
    });
});