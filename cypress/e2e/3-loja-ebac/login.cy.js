///<reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>{

beforeEach(() => {
    cy.visit('minha-conta')
});

afterEach(() => {
    cy.screenshot()
});

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('daniel.teste@teste.com.br')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, daniel.teste (não é daniel.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('rafaela.teste@teste.com.br')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('daniel.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','A senha fornecida para o e-mail daniel.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, daniel.teste (não é daniel.teste? Sair)')
    });

    it('Deve fazer login com sucesso - Fixture', () => {
       cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, daniel.teste (não é daniel.teste? Sair)')
       })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('daniel.teste@teste.com.br', 'teste')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, daniel.teste (não é daniel.teste? Sair)')
        
    });
})