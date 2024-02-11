/// <reference types="Cypress" />

// Define a test suite for purchasing products
describe('OSCommerce Product Purchase Tests', () => {
  /* ==== Test Created with Cypress Studio ==== */
it('Test1', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://sqademosatp.net/watch/');
  cy.get('[data-id="27"] > .type-1 > .name > a').click();
  cy.get('#btn-cart > .add-to-cart').click();
  cy.wait(6000);
  cy.get('.qty > .qty-box > .bigger').click();
  cy.get('.right-buttons > .btn-2').click();
  /* ==== End Cypress Studio ==== */
});

});
