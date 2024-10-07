// pages/googlePage.js
import {  By, Key, until} from 'selenium-webdriver';

import { should } from 'chai';
should(); // Initialize should
import { expect } from 'chai';
expect();

class OnbordingPage {
    constructor(driver) {
        this.driver = driver;
        this.buttonNext = By.css('[class="onboarding-button"]');
        this.buttonNextTurbo = By.css('[class="onboarding-button"]');
        this.buttonGetStarted = By.xpath('//button[text()="Get Started"]');
        this.buttonLogin = By.xpath('//div[text()="Login"]');
    }

    async ClickAcceptOnbording() {
        this.driver.wait(until.elementLocated(this.buttonNext), 25000)
        for (let i = 0; i < 7; i++) {
            await this.driver.findElement(this.buttonNext).click();
        }
    };


    async ClickButtonNoThanksTurbo() {
        await this.driver.findElement(this.buttonNextTurbo).click();
    }

    async isGetStartedShown(text) {
        let button_Get_Started=  await this.driver.findElement(this.buttonGetStarted).getText();
        button_Get_Started.should.equal(text)
    }

    async getTitle() {
        return await this.driver.getTitle();
    }
    
    async isShownTheLoginButton() {
        // wait until is visible the login button
        let webElement_Login_button;
        try {
            webElement_Login_button = await this.driver.findElement(this.buttonLogin);
            let isDisplayed = await webElement_Login_button.isDisplayed();
        } catch (error) {
            expect(webElement_Login_button, 'The login button should be visible, but it is not').to.be.true;
        }
    
    }
}
export {OnbordingPage};
