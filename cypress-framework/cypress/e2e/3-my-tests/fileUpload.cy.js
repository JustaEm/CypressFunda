/// <reference types="cypress"/>

describe('This is a file upload tutorial', () => {

    it('Should be able to upload a file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');

        const myFile = 'chatGPT.PNG'
        cy.get('#file-upload').attachFile(myFile);
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('chatGPT');





    })

})