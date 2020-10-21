describe('User can see this page', () => {
  it('user can see this page', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Greeting')
    cy.get('#quote').click()
  })
})