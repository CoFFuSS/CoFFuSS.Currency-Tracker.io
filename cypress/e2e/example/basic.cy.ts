describe('ThemeSwitcher', () => {
  it('should toggle the theme when the switch is clicked', () => {
    cy.visit('http://localhost:8080/');

    cy.get('[name="themeSwitcher"]').then(($checkbox) => {
      $checkbox[0].scrollIntoView();

      let initialBackgroundColor;
      cy.window().then((window) => {
        const computedStyle = window.getComputedStyle($checkbox[0]);
        initialBackgroundColor = computedStyle.getPropertyValue('background-color');
      });

      cy.wrap($checkbox).click({ force: true });

      cy.wrap($checkbox).should('be.checked');

      cy.window().then((window) => {
        const computedStyle = window.getComputedStyle($checkbox[0]);
        const backgroundColorAfterToggle = computedStyle.getPropertyValue('background-color');
        expect(backgroundColorAfterToggle).to.equal(initialBackgroundColor);
      });

      cy.wrap($checkbox).click({ force: true });

      cy.wrap($checkbox).should('not.be.checked');

      cy.window().then((window) => {
        const computedStyle = window.getComputedStyle($checkbox[0]);
        const backgroundColorAfterToggleOff = computedStyle.getPropertyValue('background-color');
        expect(backgroundColorAfterToggleOff).to.equal(initialBackgroundColor);
      });
    });
  });
});
