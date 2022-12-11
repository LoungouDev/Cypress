//Dashboard Page selector

const pictoUser = '//div[@class="user"]';
const btnLogOut = '//div[contains(@class,"js-logout")]';
const btnSignIn = '//h1[contains(.,"Sign in")]';
//Dashboard Page functions

export class Dashboard {
    logOut(){
        cy.xpath(pictoUser).click();
        cy.xpath(btnLogOut).click();
        cy.xpath(btnSignIn).should('be.visible');
    }
}