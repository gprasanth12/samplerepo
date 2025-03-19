describe('Practising cypress',()=>{
    it('passes',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 //        cy.get('[name="username"]').click().type("Admin")
        cy.get('[class="oxd-input oxd-input--active"]').eq(0).type('Admin')
        cy.get('[type="password"]').type('admin123')
        //cy.get('[name="password"]').click().type("admin123")
        cy.get('[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.wait(1000)
        cy.screenshot()
        cy.get('.oxd-userdropdown-tab:nth-child(4) > .oxd-userdropdown-link').click()
         })
})