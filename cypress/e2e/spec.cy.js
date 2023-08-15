// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
describe('clicks the Next button until we get to the last page', () => {
  beforeEach(() => {
    cy.visit('public/index.html')
  })

  it('With cypress-if', () => {
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

  it('With lodash, no plugins', () => {
    cy.get('.pagecontroller-num').then((pages) => {
      cy.get('.currentPage')
        .invoke('attr', 'value')
        .then((currentPage) => {
          const click = pages.length - currentPage
          Cypress._.times(click, () => cy.get('[value=next]').click())

          cy.log('**confirm we are on the last page**')
          cy.get('[value=next]').should('be.disabled')
          cy.get('[value=last]').should('be.disabled')
        })
    })
  })
})
