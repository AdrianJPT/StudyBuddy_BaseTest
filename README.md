# Test Automation Project for Study Buddy Saas

This project is designed to perform automated testing of web applications using Selenium WebDriver and Mocha. Additionally, it captures screenshots in case of test failures.

### Tech:
- Selenium JS
- Mocha Reporter
- Chai

## Test Scenarios

| Feature   | Scenario                                                                  |
|-----------|---------------------------------------------------------------------------|
| **Login** | should validate the fields for the login are valid                                  |
| **Login** | should login successfully as a non-paid user and request payment                                                 |
| **Login** | should login successfully as a paid user                                                |
| **Registration** | should not register with an already registered account |
| **Password Reset** | When user try to reset if password with a registed email, should be sent a reset code to the user email     |
| **Extension** | should have to log in to access all paid features     |


## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Project Structure

- `pages/`: Contains the Page Object Models (POM).
- `test/`: Contains the test files.
- `screenshots/`: Folder where screenshots of failed tests are saved
- `screenshot.js`: Contains the function to capture screenshots in case of failures.

## Usage

### Running Tests

To run the tests, use the following command:
```bash
npm test
```
```
NOTA: El reporte se encuentra en mochaawesome-report/mochaawesome.html
```

# Screenshot on Failures
The `screenshot.js` file contains a function that captures a screenshot when a test fails. Here's the code:

# Contributing
If you wish to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/new-functionality).
- Make your changes and commit them (git commit -am 'Add new functionality').
- Push your changes (git push origin feature/new-functionality).
- Open a Pull Request.


## License
This project is licensed under the MIT License. See the LICENSE file for more details

This `README.md` file provides a complete guide on how to install, use, and contribute to your project. It also includes code examples and an explanation of the project structure.
