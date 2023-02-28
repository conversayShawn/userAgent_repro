/// <reference types="cypress" />
describe('sample', () => {
    beforeEach('open home', () => {
        cy.visit('https://www.fandango.com')
    })

    it('can click Movies to land on desktop home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Movies') // this is a desktop-only element
                .click({ force: true })
        })

        cy.get('.now-playing__wrap') 
            .should('be.visible')
    })

    it('can click Movies to land on desktop home page', () => {
        cy.get('.nav-bar').within(() => {
            cy.contains('Movies') // this is a desktop-only element
                .click({ force: true })
        })

        cy.get('.now-playing__wrap')
            .should('be.visible')
    })

    it('can click Movies to land on desktop /movies-in-theaters', () => {
        cy.get('.nav-bar').within(() => { 
            cy.contains('Movies') // this is a desktop-only element
                .click({ force: true })
        })

        cy.get('.now-playing__wrap')
            .should('be.visible')
    })
})