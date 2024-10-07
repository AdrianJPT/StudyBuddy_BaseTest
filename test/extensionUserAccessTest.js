import { Builder, By, Key, until} from 'selenium-webdriver';
import { should } from 'chai';
should(); // Initialize should
import { expect } from 'chai';
expect();

// import pages
import { OnbordingPage} from './pages/OnbordingPage.js'
import { MainExtentionPage} from './pages/MainExtentionPage.js'

import path from 'path'
import chrome from 'selenium-webdriver/chrome.js'

describe('Validate user access', function () {
    this.timeout(30000); // Set a higher timeout for Selenium 
    let driver;
    const extensionPath = path.resolve('./extension/3.6_0.crx');
    
    before(async function() {
        let options = new chrome.Options();
        options.addExtensions(extensionPath);

        // Launch the browser
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    after(async function() {
        // Close the browser
        if (driver) {
            //await driver.quit();
        }
    });

    it( 'have to log in to access all paid features', async function(){

            // navigate to the url    
            driver.get('chrome-extension://ehaanimekcjndnhnkojcckjcgalkfgee/popup.html');

            //Onbording Next button
            let onboardingPage = new OnbordingPage(driver);
            await onboardingPage.ClickAcceptOnbording();    
            await onboardingPage.ClickButtonNoThanksTurbo();

            // Validate
            await onboardingPage.isShownTheLoginButton();
        }  
    )
})




