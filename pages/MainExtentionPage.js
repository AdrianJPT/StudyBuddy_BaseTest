// pages/googlePage.js
import {  By, Key, until} from 'selenium-webdriver';
import { should } from 'chai';
should(); // Initialize should
import { expect } from 'chai';
expect();

class MainExtentionPage {
    constructor(driver) {
        this.driver = driver;
        this.ButtonTakeScreenShot = By.xpath("//*[text()='Take Screenshot']")
    }

    async NotVisibleButtonTakeScreenShoot() {
        let isNotVisible = await this.driver.wait(async () => {
            let elements = await this.driver.findElements(this.ButtonTakeScreenShot);
            return elements.length === 0 || !(await elements[0].isDisplayed());
        }, 10000);

        expect(isNotVisible).to.be.true;
    }
}
export {MainExtentionPage};
