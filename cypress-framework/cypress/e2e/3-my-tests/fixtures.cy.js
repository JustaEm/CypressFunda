/// <reference types="cypress"/>

describe('Fixtures tutorial', () => {

    before(() => {
        //Call the test data file (fixture)
        cy.fixture('example.json').then((loginData) => {

            this.loginData = loginData
        })

    })

    it('Learn data-driven testing or parametrizing a test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type(this.loginData.Username);
        cy.get("input[placeholder='Password']").type(this.loginData.Password);
        cy.get("button[type='submit']").click();

    })
})