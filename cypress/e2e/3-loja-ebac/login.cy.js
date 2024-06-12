///<reference types="cypress" />

describe('Funcionalidade: Login', () =>{
    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('daniel.teste@teste.com.br')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, daniel.teste (não é daniel.teste? Sair)')
    })
})