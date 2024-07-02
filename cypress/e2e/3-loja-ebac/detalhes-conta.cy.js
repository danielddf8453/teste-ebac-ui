/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        });
        //Usar o comando customizado que já utilizamos
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Daniel', 'Dantas', 'daniel.teste')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});