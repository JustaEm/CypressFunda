/// <reference types="cypress"/>

//If a href has: target="_blank", that means the page opens in a new tab. If you remove this attr, the link opens in the same window

describe('Handling multiple tabs', () => {

    it('Should be able to open in the same tab', () => {

        cy.visit('https://www.google.com/gmail/about/');
        cy.get('.cookieBarConsentButton').click();

        
        cy.visit('https://about.google/products/').invoke('removeAttr', 'target').click();
        cy.get("a[aria-label='Dowiedz się więcej o usługach Google dla szkolnictwa i edukacji.']").click();

        
    })
})
