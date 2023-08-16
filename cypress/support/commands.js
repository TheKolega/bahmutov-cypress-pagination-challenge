Cypress.Commands.add(
  'clickUntilDisabled',
  {
    prevSubject: true,
  },
  (subject) => {
    cy.wrap(subject).if('not.disabled').click().clickUntilDisabled(subject)
  },
)
