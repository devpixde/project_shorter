describe('Main application ', () => {
  it('should visit the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Shorter');
  });

  it('should toggle edit button',() => {
    cy.visit('http://localhost:3000');
    cy.get('#editmode-toggle-button').should('have.length', 1);
    cy.get('[data-testid="toggle-button-off"]').should('have.length', 1);
    cy.get('[data-testid="toggle-button-on"]').should('have.length', 0);
    cy.get('#editmode-toggle-button').click();
    cy.get('#editmode-toggle-button').should('have.length', 1);
    cy.get('[data-testid="toggle-button-on"]').should('have.length', 1);
    cy.get('[data-testid="toggle-button-off"]').should('have.length', 0);
    cy.get('#editmode-toggle-button').click();
    cy.get('#editmode-toggle-button').should('have.length', 1);
    cy.get('[data-testid="toggle-button-off"]').should('have.length', 1);
    cy.get('[data-testid="toggle-button-on"]').should('have.length', 0);
  });
})