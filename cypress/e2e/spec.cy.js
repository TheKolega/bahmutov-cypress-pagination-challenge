// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
describe('clicks the Next button until we get to the last page', () => {
  beforeEach(() => {
    cy.visit('public/index.html')
  })

  it.skip('With cypress-if', () => {
    // the HTML table on the page is paginated
    // can you click the "Next" button until
    // we get to the very last page?
    // button selector "[value=next]"
    cy.keepClicking('[value=next]').then(() => {
      cy.log('**confirm we are on the last page**')
      cy.get('[value=next]').should('be.disabled')
      cy.get('[value=last]').should('be.disabled')
    })
  })

  it('With cypress-await', () => {
    while (cy.get('[value=next]').invoke('attr', 'disabled') !== 'disabled') {
      cy.wait(500).log('clicking next').get('[value=next]').click()
    }
  })
})
