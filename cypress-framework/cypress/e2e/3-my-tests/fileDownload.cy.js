
/// <reference types="cypress"/>

describe('Learning about file download in cypress', () => {

    it('Should download a file from a webpage', () => {
        //cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
        //cy.readFile('./mydownloads/example.jpg').should('exist')
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt', 'mydownloads', 'SampleText.txt')
        cy.readFile('./mydownloads/SampleText.txt').should('contain', 'esse cillum dolore');


    })
})

