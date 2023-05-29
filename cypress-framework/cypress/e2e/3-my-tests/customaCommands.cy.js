/// <reference types="cypress"/>

describe('Learning custom commands', () => {
    it('Validate Login using custom commands', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.Login('Admin', 'admin123');


    })
})