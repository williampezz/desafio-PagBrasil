/// <reference types = 'cypress'/>


import Form from '../support/page/formPage'

describe('Acessar formulario', () => {
  beforeEach(() => {
    cy.visit('https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html')
  })

  it('Envio sucedido do formulário', () => {
    Form.validateSendForm()

  })

  it('Enviar formulario com campo Name em branco', () => {
    Form.validateFormNameNull()

  })

  it('Enviar formulario com campo Email em branco', () => {
    Form.validateFormEmailNull()

  })

  it('Enviar formulario com campo Email invalido', () => {
    Form.validateFormInvalidEmail()

  })

  it('Enviar formulario com campo Company em branco', () => {
    Form.validateFormCompanyNull()

  })

  it('Enviar formulario com campo WebSite em branco', () => {
    Form.validateFormWebsiteNull()

  })

  it('Enviar formulario com campo website invalido', () => {
    Form.validateFormWebSiteInvalid()

  })



})
