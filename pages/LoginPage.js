import { By, until } from 'selenium-webdriver';
import { should } from 'chai';
should(); // Initialize should

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://studybuddy.gg/login';
        this.emailField = By.name('email');
        this.passwordField = By.name('password');
        this.loginButton = By.xpath("//span[text()='Continue']");
        this.successMessage = By.xpath("//div[text()='Login successful']");
        this.paymentRequestMessage = By.xpath("//span[text()='Get started for $0.99']");
        this.forgotPasswordLink = By.xpath("//a[text()='Reset Password']");
    }

    async open() {
        await this.driver.get(this.url);
    }

    async login(email, password) {
        await this.driver.findElement(this.emailField).sendKeys(email);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async validateLoginSuccess() {
        await this.driver.wait(until.elementLocated(this.successMessage), 10000);
        const successMessage = await this.driver.findElement(this.successMessage).getText();
        successMessage.should.equal('Login successful');
    }

    async validatePaymentRequest() {
        await this.driver.wait(until.elementLocated(this.paymentRequestMessage), 10000);
        const paymentRequestMessage = await this.driver.findElement(this.paymentRequestMessage).getText();
        paymentRequestMessage.should.equal('Get started for $0.99');
    }

    async validateEmailField() {
        const emailField = await this.driver.findElement(this.emailField);
        const emailFieldType = await emailField.getAttribute('type');
        emailFieldType.should.equal('email');
    }

    async validatePasswordField() {
        const passwordField = await this.driver.findElement(this.passwordField);
        const passwordFieldType = await passwordField.getAttribute('type');
        passwordFieldType.should.equal('password');
    }

    async ClickForgotPassword() {
        await this.driver.findElement(this.forgotPasswordLink).click();
    }
}

export { LoginPage };