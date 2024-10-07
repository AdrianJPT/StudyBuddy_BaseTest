import { Builder, until} from 'selenium-webdriver';
import { should } from 'chai';
should(); // Initialize should
import { expect } from 'chai';
expect();
import { captureScreenshotOnFailure } from '../utils/screenshot.js';

// import pages
import { LoginPage} from '../pages/LoginPage.js'
import { ResetPasswordPage} from '../pages/ResetPasswordPage.js'

describe('Password Reset Feature', function () {
    this.timeout(30000); // Set a higher timeout for Selenium 
    let driver;
    
    before(async function() {
        // Context
        driver = await new Builder()
            .forBrowser('chrome')
            .build();

    });

    after(async function() {
        // Close the browser
        if (driver) {
            this.timeout(2000)
            await driver.quit();
        }
    });

    afterEach(async function() {
        await captureScreenshotOnFailure(driver, this);
    });

    it( 'When user try to reset if password with a registed email, should be sent a password reset link to the user email', async function(){
            // context
            driver.get('https://studybuddy.gg/login');

            // Act
            const loginPage = new LoginPage(driver);
            await loginPage.ClickForgotPassword();

            const resetPasswordPage = new ResetPasswordPage(driver);
            await resetPasswordPage.InputEmail('adrianpablotamayo@gmail.com');
            await resetPasswordPage.ClickSendEmail();

            // Assert
            await resetPasswordPage.CheckCodeGenerated();
        }
    )
})


