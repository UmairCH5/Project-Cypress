describe('Example test', () =>{
    beforeEach(() => {
        cy.visit('/examples')
    })
    it.only('Multi page testing', () => {
        // cy.get('[data-test="nav-why-cypress"]').click()
        // cy.wait(1000)
        // cy.location("pathname").should("equal", "/")
        cy.wait(1000)
        cy.get('[data-test="nav-overview"]').click()
        cy.location("pathname").should("equal", "/overview")
        cy.wait(1000)
        cy.get('[data-test="nav-fundamentals"]').click()
        cy.location("pathname").should("equal", "/fundamentals")
        cy.wait(1000)
        cy.get('[data-test="nav-forms"]').click()
        cy.location("pathname").should("equal", "/forms")
        cy.wait(1000)
        cy.get('[data-test="nav-component"]').click()
        cy.location("pathname").should("equal", "/component")
        cy.wait(1000)
        cy.get('[data-test="nav-best-practices"]').click()
        cy.location("pathname").should("equal", "/best-practices")
    })
    // it('intercept test', () => {
    //     cy.intercept('post', 'http://localhost:3000/examples'), {
    //         fixture: 'example.json'
    //     }
    //     cy.get('[test-data="post-button"]').click()
    // })
    it('Add grudges', () => {
        cy.contains(/Add Some Grudges/i)
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length', 0)
        })
        cy.get('[data-test= "clear-grudge"]').should('not.exist')
        cy.get('[data-test= "grudge-title"]').should('have.text', 'Add Some Grudges')
        cy.get('[data-test="grudge-input"]').type('Add first grudge')
        cy.get('[data-test="add-grudge"]').click()
        cy.get('[data-test= "grudge-title"]').should('have.text', 'Grudges')
        cy.get('[data-test= "clear-grudge"]').should('exist')
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length', 1)
        })
        cy.get('[data-test="grudge-input"]').type('Add second grudge')
        cy.get('[data-test="add-grudge"]').click()
         cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length', 2)
            cy.get('li').its(1).should('contains.text', 'Add second grudge')
        })
        cy.get('li').its(1).within(() => {
            cy.get('button').click()
        })
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length', 1)
        })
        cy.get('[data-test= "clear-grudge"]').click()
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').should('have.length', 0)
        })
        cy.get('[data-test= "clear-grudge"]').should('not.exist')
    })
})