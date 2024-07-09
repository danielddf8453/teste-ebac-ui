/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')

            cy.get('#tab-title-description > a').should('contain', 'Descrição')           
        
    });3

    it('Deve buscar um produto com sucesso', () => {
        //Estamos criando a página de produto criando o método bruscar produto, feito no beforeEach
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve vistiar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        //Colocar o addProdutoCarrinho da forma q parametrizou (tamanho, cor, quantidade)
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' foram adicionados no seu carrinho')
    });

    it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {

            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade,)
    
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        } )

       
    });
});