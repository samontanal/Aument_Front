describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('http://localhost:3001/posts')
      cy.contains('Posts App')
      cy.contains('Recent Posts')
    })
  })