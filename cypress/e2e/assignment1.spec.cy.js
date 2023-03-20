describe('Assignment 1', () => {
  beforeEach(
    () => {
      cy.visit(`/01/${Cypress.env('initials')}`);
    }
  )

  it('should  include your name', () => {
    const name = Cypress.env('name');

    cy.contains(name);
  })

  it('should contain at least one ordered list with 3 or more items', () => {
    cy.get('ol').find('li').should('have.length.at.least', 3);
  })

  it('should contain at least one unordered list with 3 or more items', () => {
    cy.get('ul').find('li').should('have.length.at.least', 3);
  })

  it('should contain a table with a separate row of headings', () => {
    cy.get('table').find('th');
  })

  it('should contain one image',()=>{
    cy.get('img');
  })

  it('should contain one audio or video element',()=>{
    // Only one student used an `iframe` and this was to embed a YouTube video
    cy.get('audio, video, iframe')
  })

  it('should contain one and only one h1', () => {
    cy.get('body').find('h1').should('have.length', 1);
  })

  it('should contain multiple h2s',()=>{
    cy.get('body').find('h2').should('have.length.at.least',2);
  })

  it('should contain at least 3 paragraphs',()=>{
    cy.get('body').find('p').should('have.length.at.least',3);
  })
})