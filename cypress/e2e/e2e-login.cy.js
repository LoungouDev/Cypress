import {LoginPage}  from '../support/pageObjects/loginPage';
import {Dashboard}  from '../support/pageObjects/dashboard';

const login = new LoginPage;
const dashboard = new Dashboard ;
let email ;
let pwd ;

describe('sign in test-suite', () => {


    before(() => {
      cy.fixture("credencials")
      .then(function (data) {
       email = data.email;
       pwd = data.pwd;
      });
      cy.window(win => {
        win.Meteor.logout()
      })
    })



    it('load login page', () => {
      cy.getHomePage();
    })

    it('Sign in', () => {
        login.signIn(email ,pwd);
      })

    it('Sign out', ()=>{
        dashboard.logOut()
    })

  })
