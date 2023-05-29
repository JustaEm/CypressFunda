/// <reference types="cypress"/>

describe('Validate checkboxes and radiobuttons', () => {

    it.only('Should validate checkboxes', () => {

        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');

        //Check/uncheck all the boxes:
        cy.get('input[type="checkbox"]').check({ force: true });

        cy.get('input[type="checkbox"]').uncheck({ force: true });

        cy.get('input[type="checkbox"]').check({ force: true }).should('have.length', '16');


        //check 1 specific checkbox through its value:
        //cy.get('input[type="checkbox"]').check('I agree'); --> this would work if the value="I agree" but it's a label

        /*DOM ELEMENTS:
        <label for="checkbox-enhanced" class="ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-checkbox-off" xpath="1">I agree</label>
        <input type="checkbox" name="checkbox-enhanced" id="checkbox-enhanced" data-enhanced="true" xpath="1">*/

        //check() method in Cypress is used to simulate checking a checkbox or selecting a radio button 
        //based on its value or ID, rather than its label text. In this case, select the checkbox
        //based on the label text.
        //To achieve this, use the contains() method in Cypress to locate the label element
        //with the desired text, then find the associated checkbox using the for attribute.
        //cy.contains('label', 'I agree').invoke('attr', 'for').then((forValue) => {
        //cy.get(`#${forValue}`).check({ force: true });
        /*In this code, cy.contains('label', 'I agree') searches for the label element containing 
        the text "I agree". Then, we use the invoke() method to retrieve the value of the for attribute,
        which corresponds to the checkbox's ID. Finally, we use cy.get() to locate the checkbox
        by its ID and call check() to simulate checking it.
        This code assumes that the label and checkbox are related using the for attribute
        and the checkbox's ID matches the value of the for attribute.*/

    })

    it('Should validate radiobuttons', () => {
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');

        cy.get('input[type="radio"]').first().check({ force: true }); //Get the first DOM element within a set of DOM elements.
        cy.contains('label', 'Three').invoke('attr', 'for').then((forValue) => {
            cy.get(`#${forValue}`).check({ force: true });


        })


    })


})






