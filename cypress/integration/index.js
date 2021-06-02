context('Actions', () => {
  it('Material UI', () => {
    cy.visit('http://localhost:6006/iframe.html?id=example-materialui--sample')

    cy.get('[id="toggle"]').click();
    cy.get('[id="confirm"]').click();
    cy.get('[id="label"]').should('have.contain', 'true');

    cy.get('[id="toggle"]').click();
    cy.get('[id="cancel"]').click();
    cy.get('[id="label"]').should('have.contain', 'false');
  })

  it('ReactBootstrap', () => {
    cy.visit('http://localhost:6006/iframe.html?id=example-reactboostrap--sample');

    cy.get('[id="toggle"]').click();
    cy.get('[id="confirm"]').click();
    cy.get('[id="label"]').should('have.contain', 'true');

    cy.get('[id="toggle"]').click();
    cy.get('[id="cancel"]').click();
    cy.get('[id="label"]').should('have.contain', 'false');
  });
});
