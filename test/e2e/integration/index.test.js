describe('Home page', () => {
  it('loads', () => {
    cy.visit('/');
  });

  it('displays the home page', () => {
    cy.visit('/');
    cy.get('h1').contains('nuxt-template');
    cy.get('h2').contains('Nuxt.js-scaffolded project with CI and Deployment');
  });
});
