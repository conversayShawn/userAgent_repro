/// <reference types="cypress" />
describe('sample', () => {
    beforeEach('open home', () => {
        cy.visit('https://www.fandango.com')
    })

    it('can click Spotlight to land on mobile home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Spotlight') // this is a mobile-only element
                .click({ force: true })
        })

        cy.get('#now-playing-section')
            .should('be.visible')
    })

    it('can click Spotlight to land on mobile home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Spotlight') // this is a mobile-only element
                .click({ force: true })
        })

        cy.get('#now-playing-section')
            .should('be.visible')
    })

    it('can click Movies to land on mobile /movies-in-theaters', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Spotlight') // this is a mobile-only element
                .click({ force: true })
        })

        cy.get('#now-playing-section')
            .should('be.visible')
    })
})