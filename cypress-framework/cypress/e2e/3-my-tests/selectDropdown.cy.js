/// <reference types="cypress"/>

describe('Validate dropdowns', () => {

    it('Validate autocomplete based dropdown', () => {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#APjFqb').type('cypress automation');
        cy.contains('cypress automation framework').click();

    })

})

