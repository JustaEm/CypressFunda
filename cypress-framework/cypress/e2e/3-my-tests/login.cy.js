/// <reference types="cypress"/>

import { loginPageElements } from "../../../PageObject/PageElements/LoginPageElements.cy.js"
const loginElements = new loginPageElements

describe('Page Object Model', () => {


    it('Login Page', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginElements.username('Admin');
        loginElements.password('admin123');
        loginElements.submitButton();


    })
})

