describe("Scénario: Design responsive", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.contains("Quiz Aventure");
  });
  it("Affichage Ipad mini", () => {
    cy.viewport('ipad-mini');
  });
});