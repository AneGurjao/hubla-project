/// <reference types="cypress" />
// @ts-check

describe("Upload tests", () => {
  it('upload a file', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[type="file"]').attachFile('sales.tsx');
  });
});
