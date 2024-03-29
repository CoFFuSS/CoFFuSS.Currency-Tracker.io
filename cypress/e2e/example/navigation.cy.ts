describe('Navigation', () => {
  it('should navigate between pages correctly', () => {
    cy.visit('/');

    cy.url().should('include', '/');

    cy.contains('TimeLine').click();

    cy.url().should('include', '/timeline');

    cy.contains('BankCard').click();

    cy.url().should('include', '/bankcard');

    cy.contains('Contact').click();

    cy.url().should('include', '/contact');

    cy.contains('Home').click();

    cy.url().should('include', '/');
  });
});
