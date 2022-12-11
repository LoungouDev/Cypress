
import {LoginPage}  from '../support/pageObjects/loginPage';
import {Dashboard}  from '../support/pageObjects/dashboard';

const login = new LoginPage;
const dashboard = new Dashboard ;
let fName;
let lName;
let pwd;

describe('create account test-suite', () => {

  //
  before(() => {
    cy.fixture("account")
      .then(function (data) {
       fName = data.firstName;
       lName = data.lastName;
       pwd = data.pwd
      });
    cy.window(win => {
      win.Meteor.logout()

    })
  })

  it('load login page', () => {
    cy.getHomePage();
  })
  it('create account', () => {
    login.signUp(fName,lName,pwd);
  })

  it('Sign out', ()=>{
    dashboard.logOut()
})
})
