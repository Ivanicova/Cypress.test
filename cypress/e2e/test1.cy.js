describe('Testing main page of application Tour of Heroes', () => {

    it(`Testing title 'Tour Of Heroes and its properties'`, () => {
        cy.visit('http://localhost:4200')
        cy.contains('h1', 'Tour of Heroes').should('have.css', 'color', 'rgb(38, 77, 115)').should('have.css', 'font-family' , 'Arial, Helvetica, sans-serif').should('have.css', 'margin-bottom', '0px').should('have.css', 'font-size', '40px')
    });

    it(`Testing title 'Top Heroes'`, () => {
        cy.contains('Top Heroes');
    });

     it(`Testing title 'Hero Search'`, () => {
        cy.contains('Hero Search');
    });

    it(`Testing backround color rgba(0, 0, 0, 0)`, () => {
        cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });

    it(`Button Dashboard should be visible and have listed text Dashboard`, () => {
        cy.get('[routerlink="/dashboard"]').should('be.visible',).contains('Dashboard');
    });

    it(`Button Heroes should be visible and have listed text Heroes`, () => {
        cy.get('[routerlink="/heroes"]').should('be.visible').contains('Heroes');
    });

    it(`h2 should be visible and have listed text Top Heroes`, () => {
        cy.contains('app-dashboard > h2', 'Top Heroes')
        cy.get('.heroes-menu').should('be.visible');
    });

    it(`Page should contain empty search box`, () => {
        cy.get('#search-box').should('be.empty');
    });

    it(`Page should contain Clear messages button`, () => {
        cy.get('.clear').should('have.text', 'Clear messages')
    });
});
