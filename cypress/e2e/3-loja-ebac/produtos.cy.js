/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
            //.first()
            .eq(2) //Ou colocar .contains('NOME DO PRODUTO')
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')           
        
    });
});