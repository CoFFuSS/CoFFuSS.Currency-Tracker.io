describe('Timeline Page', () => {
  beforeEach(() => {
    cy.visit('/timeline');
    cy.get('input#minPrice').clear();
    cy.get('input#maxPrice').clear();
  });

  it('should display the chart with valid input', () => {
    cy.get('input#minPrice').type('500');
    cy.get('input#maxPrice').type('1000');
    cy.get('input#selectedDate').type('2024-03-23');

    cy.get('button[type="submit"]').click();

    cy.get('canvas').should('exist');
  });

  it('should display error messages with invalid input', () => {
    cy.get('input#minPrice').type('1000');
    cy.get('input#maxPrice').type('500');

    cy.get('button[type="submit"]').click();

    cy.contains('Minimum price cannot be greater than maximum price').should('exist');

    cy.get('input#minPrice').clear().type('500');
    cy.get('input#maxPrice').clear().type('1000');

    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid number').should('not.exist');
    cy.contains('Minimum price cannot be greater than maximum price').should('not.exist');

    cy.get('canvas').should('exist');
  });
});
