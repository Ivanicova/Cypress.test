/* 
testing h1 and label of Bombasto page
adding new hero Wrex, replacing Bombasto. Saving and checking name on Dashboard and Heroes
*/

describe('Adding new hero Wrex, replacing Bombasto', () => {

    it('Page should contain h1 element Tour of Heroes and label Hero name ', () => {  
        cy.visit('http://localhost:4200')
        cy.get('[ng-reflect-router-link="/detail/13"]').click()
        cy.contains('h1', 'Tour of Heroes')
        cy.contains('label', 'Hero name:')
    });

    it(`Replacing hero, changing original name Bombasto to new name Wrex`, () => {
        cy.get('#hero-name').click().clear().should('be.empty').type('Wrex')
    });

    it(`Checking, if rename of hero was succesfull`, () => {
        cy.contains('app-hero-detail > :nth-child(1) > h2', 'WREX')
    });

    it(`Saving changes`, () => {
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)').click()
    });
   
    it(`Checking changes in Dashboard `, () => {
        cy.contains('[ng-reflect-router-link="/detail/13"]', 'Wrex')
    });

    it(`Checking changes in Heroes `, () => {
        cy.get('[routerlink="/heroes"]').click()
        cy.contains('.heroes > :nth-child(2) > a', 'Wrex')
    });
});
