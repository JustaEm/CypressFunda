/// <reference types="cypress"/>

//before(Open website)
//beforeEach(Login)

describe('Smoke test', () => {

    before(() => { //Open website
        cy.visit('https://www.saucedemo.com');
    })

    beforeEach(() => { //Login
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();
    })

    it('Validate item link', () => {

        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").click();

    })

    it('Validate Add to cart item', () => {

        cy.get("#add-to-cart-sauce-labs-backpack").click();

    })

    afterEach(() => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click();
    })


})