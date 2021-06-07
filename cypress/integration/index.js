context('Actions', () => {
  it('Material UI', () => {
    cy.visit('http://localhost:6006/iframe.html?id=example-materialui')

    cy.get('[id="toggle"]').click();
    cy.get('[id="confirm"]').click();
    cy.get('[id="result"]').should('have.text', 'Confirmed!!');

    cy.get('[id="toggle"]').click();
    cy.get('[id="cancel"]').click();
    cy.get('[id="result"]').should('have.text', '');
  })

  it('ReactBootstrap', () => {
    cy.visit('http://localhost:6006/iframe.html?id=example-reactboostrap');

    cy.get('[id="toggle"]').click();
    cy.get('[id="confirm"]').click();
    cy.get('[id="result"]').should('have.text', 'Confirmed!!');

    cy.get('[id="toggle"]').click();
    cy.get('[id="cancel"]').click();
    cy.get('[id="result"]').should('have.text', '');
  });


  it('ChakraUI', () => {
    cy.visit('http://localhost:6006/iframe.html?id=example-chakraui');

    cy.get('[id="toggle"]').click();
    cy.get('[id="confirm"]').click();
    cy.get('[id="result"]').should('have.text', 'Confirmed!!');

    cy.get('[id="toggle"]').click();
    cy.get('[id="cancel"]').click();
    cy.get('[id="result"]').should('have.text', '');
  });
});
