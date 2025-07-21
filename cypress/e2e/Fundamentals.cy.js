describe('Fundamentals', () => {
  beforeEach (() => {
    cy.visit('/fundamentals')
       
  })
  it('Fundamentals contains text', () => {
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion opens correctly', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')


  })
})