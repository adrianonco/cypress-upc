/// <reference types="Cypress" />

// Define a test suite for purchasing products
describe('OSCommerce Product Purchase Tests', () => {

  // Define a test case that covers purchasing different products with specific quantities
  it('TC1 and TC2 - Purchase different products with specific quantities', () => {
    
    // Load the product data from the 'products' fixture
    cy.fixture('products').then((data) => {

      // Iterate over each product in the loaded fixture data
      data.products.forEach((product) =>  {

        // Step 1: Go to the specific website calling the custom command with the name of the fixture file
        cy.navigateToUrl('urls');

        // Step 2: Find a clickable element that contains a given name in 'products' fixture
        cy.contains(product.name).click();

        // Step 3: Find the "Add to Cart" button and click it
        cy.get('.btn-2.add-to-cart').click();

        // Step 4: 
        //Wait for the popup form to appear
        cy.get('#cart-form').should('be.visible');
        // Update the quantity of the product using a loop to increase the desired quantity
        Array.from({length: product.quantity - 1}).forEach(() => {
          cy.get('div.qty span.bigger').click();
        })
      });
    });
  });
});