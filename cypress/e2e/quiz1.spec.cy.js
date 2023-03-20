describe('Quiz 1', () => {
  beforeEach(
    () => {
      cy.visit(`/q01/${Cypress.env('initials')}`);
    }
  )

  it('should contain an h1 with the text COMP 1080', () => {
    cy.get('h1').contains('COMP 1080')
  })

  it('should contain an h2 with the text "About"', () => {
    cy.get('h2').contains('About')
  })

  it('should contain the first paragraph', () => {
    const text = `This is going to be the most awesome course ever`;

    // cy.get('body').find('p').contains(text)
    cy.contains(text)
  })

  it('should contain an h2 with the text "Todo', () => {
    const text = `After we learn to style web pages using CSS`;
    
    cy.get('body').find('p').contains(text)

  })

  it('should contain an h2 with the text "Todo"',()=>{
    cy.get('h2').contains('Todo')
  })

  it('should contain an ordered list with the three assignments',()=>{
    cy.get('ol').find('li').should('have.length',3)
  })

  it('should use divs for organization',()=>{
    cy.get('body').find('div').should('have.length.at.least',2)
  })
})