/// <reference types="cypress"/>

describe('BDD Explicit assertion', () => {
    it('Validate complex data using expect', () => {
        cy.visit('https://google.com/');
        cy.get('#L2AGLb > .QS5gu').click();

        //Simple string verification:
        let pageName = 'Google Homepage'
        expect(pageName).to.not.equal('Google');
        expect(pageName).to.be.a('string');
        expect(pageName).to.have.length.of.at.most(15); //length of the name = Google Homepage


        //Validateing objects:
        let person = {
            firstName: "Testing",
            lastName: "Funda"
        };

        expect(person).to.deep.equal({
            firstName: "Testing",
            lastName: "Funda"
        })

        expect(person).to.have.property('lastName', 'Funda');

        //Validating arrays:

        let employeeIDs = [1, 2, 3, 4, 5];
        expect(employeeIDs).to.have.ordered.members([1, 2, 3, 4, 5]);
        expect(employeeIDs).to.include(2)





    })
})