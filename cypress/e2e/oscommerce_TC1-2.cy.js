/// <reference types="Cypress" />

// Define a test suite for purchasing products
describe('OSCommerce Product Purchase Tests', () => {

  // Define a test case that covers purchasing different products with specific quantities
  it('TC1 and TC2 - Purchase different products with specific quantities', () => {
    
    //?
    cy.fixture('products').then((data) => {

      data.products.forEach((product) =>  {

        // Step 1: Go to the specific website calling the custom command with the name of the fixture file
        cy.navigateToUrl('urls');

        // Step 2: Click the product with the given name
        cy.contains(product.name).click();

      });
    });
  });
});