describe("books list", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("Should successfully create new book", () => {
    cy.createBook('', '', 'Б')
    cy.contains('A').should('be.visible')
    cy.contains('Б').should('be.visible')
  });
});

describe("favorits", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("bropet@mail.ru", "123");
      cy.createBook('A', '', 'Б')
    });
  
    it("Should add book to favorites", () => {
    cy.contains('Add to favorite').click()
    cy.get('h4').click()
    cy.contains('A').should('be.visible')
    cy.contains('Б').should('be.visible')
    });

    it("Should delete book from favorites", () => {
        cy.get('h4').click()
        cy.contains('Delete from favorite').click()
        cy.contains('A').should('not.exist')
        cy.contains('Б').should('not.exist')
        });
  });
