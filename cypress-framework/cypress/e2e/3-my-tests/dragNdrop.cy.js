/// <reference types="cypress"/>

describe('This is a drag&drop', () => {

    it('Learn drag&drop function', () => {
        cy.visit('http://vishalok12.github.io/jquery-dragarrange/');

        //This is the syntax: cy.get('.sourceitem').drag('.targetitem')
        cy.get('.draggable-element.d-1').drag('.draggable-element.d-3', { force: true });
        cy.get('.draggable-element.d-4').drag('.draggable-element.d-1', { force: true });

    })

})