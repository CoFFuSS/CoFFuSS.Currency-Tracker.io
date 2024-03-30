describe('Currency Conversion Module', () => {
  it('should open modal and perform currency conversion', () => {
    cy.visit('/');

    cy.request('/api/currencies').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length.above(0);
    });

    cy.get('[data-test-id="currency-card-USD"]').first().click();

    cy.get('[data-test-id="currency-modal"]').should('be.visible');

    cy.get('input[data-test-id="input-amount"]').type('100');

    cy.get('input[data-test-id="output-amount"]').should('have.value', '100');

    cy.get('[data-test-id="currency-modal"]').find('[data-test-id="close-button"]').click();

    cy.get('[data-test-id="currency-modal"]').should('not.exist');
  });
});
