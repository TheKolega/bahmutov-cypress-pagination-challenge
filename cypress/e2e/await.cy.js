// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('public/index.html')
})

it('With cypress-await', () => {
  while (cy.get('[value=next]').invoke('attr', 'disabled') !== 'disabled') {
    cy.wait(500).log('clicking next').get('[value=next]').click()
  }
})
