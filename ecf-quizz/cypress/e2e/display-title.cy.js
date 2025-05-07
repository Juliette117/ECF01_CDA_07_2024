describe('Scénario: Afficher le titre', () => {
  it('devrait afficher le titre', () => {
    cy.visit("http://localhost:5173");
    cy.get("h1").should("have.text", "Quiz Aventure");
  });
});


