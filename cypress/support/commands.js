Cypress.Commands.add('keepClicking', (element) => {
  cy.get(element).if('not.disabled').click().keepClicking(element)
})
