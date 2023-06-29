describe("books list", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("Should successfully create new book", () => {
    cy.createBook("Мастер и Маргарита", "Великая книга", "Булгаков");
    cy.contains("Мастер и Маргарита").should("be.visible");
    cy.contains("Булгаков").should("be.visible");
  });

  it("Should add book to favorites", () => {
    cy.contains("Add to favorite").click();
    cy.get("h4").click();
    cy.contains("Мастер и Маргарита").should("be.visible");
    cy.contains("Булгаков").should("be.visible");
  });

  it("Should delete book from favorites", () => {
    cy.get("h4").click();
    cy.contains("Delete from favorite").click();
    cy.contains("Мастер и Маргарита").should("not.exist");
    cy.contains("Булгаков").should("not.exist");
  });
});
