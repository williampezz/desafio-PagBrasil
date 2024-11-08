const elem = require('./formElements').ELEMENTS;

class Form {


    //realizar o envio correto do formulario
    validateSendForm() {
        cy.get(elem.inputName).type('william'),
            cy.get(elem.inputEmail).type('william@teste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste')
        cy.get(elem.btSubmit).should('be.visible').click()
        cy.get(elem.successMessage).should('be.visible', 'Form submitted successfully!')


    }

    //valida o envio do formulario porem o campo name vai estar nulo
    validateFormNameNull() {

        cy.get(elem.inputEmail).type('william@teste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()


        //Apos clicar no botao Submit, verifico se o campo esta nulo e a mensagem do navegador
        cy.get(elem.inputName).then(($input) => {
            expect($input[0].checkValidity()).to.be.false; // Verifica se o campo é inválido
            expect($input[0].validationMessage).to.equal('Preencha este campo.'); // Verifica a mensagem de validação padrão
        });


    }

    //valida o envio do formulario porem o campo email vai estar nulo
    validateFormEmailNull() {
        cy.get(elem.inputName).type('william'),
            //cy.get(elem.inputEmail).type('william@teste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()


        // Verifique se o campo "Email" é nulo após o clique
        cy.get(elem.inputEmail).then(($input) => {
            expect($input[0].checkValidity()).to.be.false; // Verifica se o campo é inválido
            expect($input[0].validationMessage).to.equal('Preencha este campo.'); // Verifica a mensagem de validação padrão
        });


    }



    //valida o envio do formulario com email invalido
    validateFormInvalidEmail() {
        cy.get(elem.inputName).type('william'),
            cy.get(elem.inputEmail).type('williamteste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()


        // Verifique se o campo "Email" é inválido após o clique
        cy.get(elem.inputEmail).then(($input) => {
            expect($input[0].validationMessage).to.include('Inclua um "@" no endereço de e-mail');
        });



    }


    //valida o envio do formulario porem o campo company vai estar nulo
    validateFormCompanyNull() {
        cy.get(elem.inputName).type('william'),
            cy.get(elem.inputEmail).type('william@teste.com'),
            //cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()


        // Verifique se o campo "Company" é nulo após o clique
        cy.get(elem.inputCompany).then(($input) => {
            expect($input[0].checkValidity()).to.be.false; // Verifica se o campo é inválido
            expect($input[0].validationMessage).to.equal('Preencha este campo.'); // Verifica a mensagem de validação padrão
        });


    }


    //valida o envio do formulario porem o campo Website vai estar nulo
    validateFormWebsiteNull() {
        cy.get(elem.inputName).type('william'),
            cy.get(elem.inputEmail).type('william@teste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            //cy.get(elem.inputWebsite).type('https://www.pagbrasil.com/pt-br/'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()
        cy.get(elem.successMessage).should('be.visible', 'Form submitted successfully!')


    }


    //valida o envio do formulario porem o campo Website não é uma url valida
    validateFormWebSiteInvalid() {
        cy.get(elem.inputName).type('william'),
            cy.get(elem.inputEmail).type('william@teste.com'),
            cy.get(elem.inputCompany).type('Pag Brasil'),
            cy.get(elem.inputWebsite).type('pagbrasil'),
            cy.get(elem.inputPhone).type('(51) 99999-9942'),
            cy.get(elem.textAreaInquiry).type('teste'),
            cy.get(elem.btSubmit).should('be.visible').click()


        // Verifique se o campo "WebSite" é valido após o clique
        cy.get(elem.inputWebsite).then(($input) => {
            expect($input[0].validationMessage).to.equal('Insira um URL.'); // Verifica a mensagem de validação padrão
        });


    }







}

export default new Form();