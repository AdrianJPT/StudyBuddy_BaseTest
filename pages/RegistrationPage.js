import { By, until } from 'selenium-webdriver';

class RegistrationPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://studybuddy.gg/register';
        this.emailField = By.name('email');
        this.passwordField = By.name('password');
        this.confirmPasswordField = By.name('confirmPassword');
        this.continueButton = By.xpath("//span[text()='Continue']");
        this.errorMessage = By.xpath("//p[text()='Email already exists. Please Login instead.']");
    }

    async open() {
        await this.driver.get(this.url);
    }

    async register(email, password) {
        await this.driver.findElement(this.emailField).sendKeys(email);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.confirmPasswordField).sendKeys(password);
        await this.driver.findElement(this.continueButton).click();
    }

    async validateRegistrationFailure() {
        await this.driver.wait(until.elementLocated(this.errorMessage), 10000);
        const errorMessage = await this.driver.findElement(this.errorMessage).getText();
        errorMessage.should.equal('Email already exists. Please Login instead.');
    }
}

export { RegistrationPage };