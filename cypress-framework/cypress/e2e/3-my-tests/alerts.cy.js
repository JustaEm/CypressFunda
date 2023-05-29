/// <reference types="cypress"/>

describe('Handling of alerts in cypress', () => {

    it('Handling of a basic alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (alertWindow) => {

            expect(alertWindow).to.contains('I am a JS Alert');


        })
    })

    it('Handling of Confirm alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (acceptConfirm) => {

            expect(acceptConfirm).to.contains('I am a JS Confirm');

            cy.get('#result').should('have.text', 'You clicked: Ok');


        })
    })


    it.only('Handling of Confirm alert Cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        //two ways to cancel:
        //1.
        //cy.on('window:confirm', (cancelPopup) => { 
        // return false;

        //2:
        cy.on('window:confirm', () => false); // cypress closes the window by clicking Cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })
})

