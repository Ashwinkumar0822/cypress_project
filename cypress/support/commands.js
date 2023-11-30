 Cypress.Commands.add('ValidLogin', (selectors, input) => {
    cy.get(selectors.username).type(input.username)
    cy.get(selectors.password).type(input.password)
    cy.get(selectors.submit_button).click({ timeout: 2000 }, { force: true })
}) 
Cypress.Commands.add('InValidLogin', (selectors, input) => {
    cy.get(selectors.username).type(input.iusername)
    cy.get(selectors.password).type(input.ipassword)
    cy.get(selectors.submit_button).click({ timeout: 2000 }, { force: true })
})
Cypress.Commands.add('HomepageTitle', (selectors, input) => {
    //checking thheader title dashboard
    cy.get(selectors.topbar).invoke(input.text).should('contains', input.Dashboard)
}) 
Cypress.Commands.add('search', (selectors, input) => {
    //checking the search bar is working
    cy.get(selectors.search).click().type(input.myinfo).type(input.enter).then(() => {
        cy.get(selectors.mainmenu).click()
            })
}) 
Cypress.Commands.add('personaldetails', (selectors, input) => {
// search
    cy.get(selectors.personaltitle).invoke(input.text).should('contains',input.personaldetails)
})
Cypress.Commands.add('personaldetailsData', (selectors, input) => { //checking the my info page is able to fill in data's
    cy.get(selectors.fname).click().clear().type(input.fname)
    cy.get(selectors.lsname).click().clear().type(input.lname)
}) 
Cypress.Commands.add('errormessageRequired', (selectors, input) => {
    cy.wait(10000)
    cy.get(selectors.fname).click().clear()
    cy.get(selectors.errmessage).invoke(input.text).should('contains',input.errmessage)
    })
Cypress.Commands.add('profilepictureRequired', (selectors, input) => {
    cy.get(selectors.empimage).click( )
    cy.get(selectors.savebutton).click()
    cy.get(selectors.err).invoke(input.text).should('contains',input.errmessage)
})
Cypress.Commands.add('userdropdown', (selectors, input) => {
    //verifying the user drpdown is existnpm uninstall cypress
    cy.get(selectors.userdropdown).should(input.exist1)
})
Cypress.Commands.add('logoutfunction', (selectors) => {
    //verifying the user drpdown is exist
    cy.get(selectors.usericon).click()
    cy.wait(5000)
    cy.get(selectors.logout).click()
})
