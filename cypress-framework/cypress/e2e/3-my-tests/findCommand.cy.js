/// <reference types="cypress"/>

describe('Validate Login function', () => {
    it('Validate Login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        /*
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
        */

        //using xpatch selector:
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.xpath("//input[@placeholder='Password']").type('admin123');
        cy.xpath("//button[normalize-space()='Login']").click();
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text', 'Dashboard');

        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
        //If you don't want it to be case sensitive, add: `{matchCase: false}`:
        //cy.get('.oxd-topbar-body-nav > ul').contains('apply', { matchCase: false }).click();

        //Using RegEx when you only want to find 1 letter of a word:
        //cy.get('.oxd-topbar-body-nav > ul').contains(/^M\w+/).click();


        //Asing `contains` selectro in Cypress tool directly:
        //cy.contains('Apply').click();

        //.get('parent element').find('child element').click();
        cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('Apply').click();



    })
})