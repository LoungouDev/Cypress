//page Selector

const loginField = 'input[data-test="login-email"]';
const btnContinue = 'button[data-test="validate-email"]';
const pwdField = 'input[data-test="login-password"]';
const btnSignIn = 'button[data-test="login-button"]';
const dashboardSection = '//h1[contains(.,"Dashboard")]';
const btnSignUp = 'a[data-test="create"]';

//create account page

const firstName = '//div[contains(@class,"js-first-name")]//input';
const lastName = '//div[contains(@class,"js-last-name")]//input';
const email = '//div[contains(@class,"js-email")]//input';
const pwd = '//div[contains(@class,"js-password")]//input';
const checkBox1 = 'input[id="term-of-use-agreement"]';
const checkBox2 = 'input[id="privacy-policy-agreement"]';
const nextStep = '//button[contains(@class,"js-create")]';
const salesTeam = '//div[contains(text(),"Sales team")]';
const confirm = '//div[contains(@class,"js-step-teamType visible")]//button[contains(text(),"Confirm")]';
const confirm1 = '//div[contains(@class,"js-step-objectives visible")]//button[contains(text(),"Confirm")]';
const confirm2 = '//div[contains(@class,"js-step-teamSize visible")]//button[contains(text(),"Confirm")]';
const confirm3 = '//div[contains(@class,"js-step-colorScheme visible")]//button[contains(text(),"Confirm")]';
const attractAndHire = '//div[contains(text(),"Attract and hire top talent")]';
const people = '//div[contains(@class,"js-step-teamSize")]//div[contains(@class,"choice")][2]';
const lightMode = '(//div[contains(@class,"js-step-colorScheme visible")]//div[@class="choice img"])[1]';
const newLemlist = '//div[contains(text(),"I am new")]';
const start = '//div[contains(@class,"js-step-userLevel visible")]//button[contains(text(),"Start using lemlist")]';
const pictoUser = '//div[@class="user"]';

//Page common fuctions

export class LoginPage {

    signIn(login, pawd) {
        cy.get(loginField).type(login);
        cy.get(btnContinue).click();
        cy.get(pwdField).type(pawd);
        cy.get(btnSignIn).click();
        cy.xpath(dashboardSection).should('be.visible');
    }

    signUp(fName,lName,passwprd) {
        cy.get(btnSignUp).click();
        cy.xpath(firstName).type(fName);
        cy.xpath(lastName).type(lName);
        cy.xpath(email).type('Lounrgou.ayoub.fst+'+Math.random(1000000)+'@gamil.com');
        cy.xpath(pwd).type(passwprd);
        cy.get(checkBox1).click();
        cy.get(checkBox2).click();
        cy.xpath(nextStep).click();
        cy.xpath(salesTeam).click();
        cy.xpath(confirm).click();
        cy.xpath(attractAndHire).click();
        cy.xpath(confirm1).click();
        cy.xpath(people).click();
        cy.xpath(confirm2).click();
        cy.xpath(lightMode).click();
        cy.xpath(confirm3).click();
        cy.xpath(newLemlist).click();
        cy.xpath(start).click();
        cy.xpath(pictoUser).should('be.visible');
    }
}