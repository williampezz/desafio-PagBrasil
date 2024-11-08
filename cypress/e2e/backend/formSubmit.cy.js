describe('Backend - Teste de validação do campo Name', () => {
    it('Deve retornar sucesso quando o campo Name for válido', () => {
        cy.request({
            method: 'POST',
            url: '/api/form-submit',  
            body: {
                name: 'William Pezzi',  
                email: 'william@teste.com',
                company: 'Pag Brasil',
                website: 'https://www.pagbrasil.com/pt-br/',
                phone: '(51) 99999-9942',
                inquiry: 'Teste de formulário'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);  
            expect(response.body.sucesso).to.be.true;  
        });
    });
});


describe('Backend - Teste de erro no campo Name', () => {
    it('Deve retornar erro quando o campo Name for inválido', () => {
        cy.request({
            method: 'POST',
            url: '/api/form-submit',  
            body: {
                name: '', 
                email: 'william@teste.com',
                company: 'Pag Brasil',
                website: 'https://www.pagbrasil.com/pt-br/',
                phone: '(51) 99999-9942',
                inquiry: 'Teste de formulário'
            },
            failOnStatusCode: false  
        }).then((response) => {
            expect(response.status).to.eq(412);  
            expect(response.body.sucesso).to.be.false;  
            expect(response.body.erro).to.eq('Campo Name inválido.');  
        });
    });
});




