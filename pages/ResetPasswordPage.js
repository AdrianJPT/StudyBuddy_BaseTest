import {  By, until} from 'selenium-webdriver';
import { expect } from 'chai';
expect();

class ResetPasswordPage {

    constructor(driver) {
        this.driver = driver;
        this.inputEmail = By.name('email'); // Assuming 'email' is the correct name attribute for the email input field
        this.butonSendEmail = By.xpath("//span[text()='Send Code']"); // Assuming 'sendEmail' is the correct name attribute for the send button
        this.codeGenerated = By.xpath("//span[text()='Code Generated']");
    }

    async InputEmail(text) {
        await this.driver.findElement(this.inputEmail).sendKeys(text);
    }
    async ClickSendEmail() {
        await this.driver.findElement(this.butonSendEmail).click();
    }
    async CheckCodeGenerated() {
        // Check if the code was generated
        await this.driver.wait(until.elementLocated(this.codeGenerated), 5000);
    }
}

export {ResetPasswordPage};
