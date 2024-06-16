# automationexercise-test
This test is a comprehensive automated testing project designed to validate and ensure the functionality and reliability of the AutomationExercise website.

## Environment Settings
* Install [Node.js](https://nodejs.org/): Visit the official website, download, and install the version suitable for your computer.
* Install [Visual Studio Code](https://code.visualstudio.com/).
* Install the following plugins in VSCode:
    * [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete): Provides Cucumber snippets and templates.
    * [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons): Enhances visualization with project file icons.
    * [vscode-cy-helper](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper): Enables "Go to Definition" for Cypress custom commands.

* Install the Project: `npm install`

## Project Structure
* **integration**: Contains files with test scenarios written in BDD (Behavior-Driven Development) format.
* **plugin/index.js**: This file is used for configuring plugins within the project. For instance, it is used to configure Cucumber.
* **support**: This folder houses steps, scripts, and test element mappings.
    * **steps**: Defines steps that connect BDD scenarios to Cypress scripts.
    * **commands**: Cypress test scripts reside here.
* **node_modules**: Directory containing project dependencies. Should not be manually altered.
* **cypress.config.js**: File holding the project's global settings, such as global variables, browser resolution, default URL, among others.

## Final Steps
After installing project dependencies, follow these steps to start and run your tests:
* Open your terminal. Type the following command: npx cypress open
* Once Cypress Test Runner opens, you can choose from the available integration tests listed. Click on a test file to run it in the browser or headless mode.
* After tests are executed, Cypress provides detailed logs, screenshots, and videos of the test run for analysis and debugging.

By following these steps, you can effectively set up and execute tests using Cypress, ensuring robust testing and clear reporting for your project.

*Observation*
If an error occurs when installing Cypress due to incompatibility with the architecture of the operating system, perform the following procedure:
- In the 'package.json' file locate the Cypress dependency and delete it;
- Then run the command in the terminal npm install cypress;
- After finishing run the command npx cypress open.