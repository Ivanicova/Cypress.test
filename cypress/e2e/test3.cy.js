
describe('Adding brand new hero to Heroes with name Cirilla', () => {


    it('Adding hero with name Cirilla', () => {
        cy.visit('http://localhost:4200')
        cy.get('[routerlink="/heroes"]').click()
        cy.get('#new-hero').click().should('be.empty').type('Cirilla')
        cy.get('.add-button').click()
    });

    it(`Testing, if hero Cirilla has beed added to list of heroes `, () => {
        cy.get(':nth-child(10) > a').contains('Cirilla')
    });

    it(`Deleting hero Bombasto from Heroes `, () => {
        cy.get(':nth-child(2) > .delete').click()
    });

    it(`Testing, if Bombasto was deleted from Dashboard `, () => {
        cy.get('[routerlink="/dashboard"]').click()
        cy.get('.heroes-menu').should('not.have.text', 'Bombasto')
    });

    it(`Testing, if Cirilla can be found from Hero Search bar`, () => {
        cy.get('#search-box').click().type('Cirilla')
        cy.get('li > a').click()
        cy.get('app-hero-detail > :nth-child(1) > h2').contains('CIRILLA')    
    });

});


