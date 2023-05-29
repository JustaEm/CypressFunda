/// <reference types="cypress"/>

describe('Validate data using Assert', () => {
    it('Assert', () => {

        cy.visit('www.google.com');
        cy.get('#L2AGLb > .QS5gu').click();

        //Asserting srings:
        let firstName = 'TestingFunda'
        assert.equal(firstName, 'TestingFunda');
        assert.include(firstName, 'Testing');
        assert.typeOf(firstName, 'String');

        //Asserting object:
        let person = {
            firstName: "Testing",
            lastName: "Funda"
        };

        assert.property(person, 'lastName');
        assert.isObject(person);
        assert.deepPropertyVal(person, 'firstName', 'Testing');

    })

})