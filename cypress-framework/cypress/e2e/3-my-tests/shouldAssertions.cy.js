/// <reference types="cypress"/>

describe('BDD style assertions', () => {
    it('Validate OrangeHRM Login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.url().should('include', '/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.get('.oxd-text--h5').should('have.text', 'Login');
        cy.get('.oxd-sheet > :nth-child(2)').should('include.text', 'admin123');
        cy.get('.oxd-text--h5').should('not.contain', 'Logout');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
            .and('exist').and('be.enabled');
        cy.get('.oxd-button').should('have.css', 'background-color', 'rgb(255, 123, 29)');

    })
})