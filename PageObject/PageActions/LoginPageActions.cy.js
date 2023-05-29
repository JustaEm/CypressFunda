
const loginElementLocators = require('../PageElements/LoginPageElements.cy.json')

export class loginPageElements {

    usernameText = "input[placeholder='Username']"
    passwordText = "input[placeholder='Password']"
    loginButton = "button[type='submit']"

    username(username1) {
        cy.get(loginElementLocators.LoginPageLocators.usernameText).type('username1');
        return

    }

    password(password1) {
        cy.get(loginElementLocators.LoginPageLocators.passwordText).type('password1');
        return

    }

    submitButton() {
        cy.get(loginElementLocators.LoginPageLocators.loginButton).click();
        return

    }


}