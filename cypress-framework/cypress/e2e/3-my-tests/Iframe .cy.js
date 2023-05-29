/// <reference types="cypress"/>

describe('Handling iframes', () => {

    it('Validate user is able to write in the text area', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.get('#mce_0_ifr').then(($iframe) => {

            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody)
                .clear()
                .type('Welcome to cypress tutorial about handling iframes')
                .type('{selectall}');
                cy.get('[aria-label="Bold"]').click();

        })



    })
})