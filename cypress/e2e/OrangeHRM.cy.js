import '/cypresspro/cypress/support/commands.js'
import landing from '/cypresspro/cypress/features/landingpage.js'

describe('Project Test Suite', () => {
  let input, selectors;

  before(() => {
      cy.fixture('input.json').then((data) => {
          input = data;
      });
      cy.fixture('selectors.json').then((data1) => {
          selectors = data1; // Corrected variable assignment
      });
  });

  const obj = new landing(); // Assuming 'Landing' is the correct class or object name

  beforeEach(() => {
      obj.landingpage(selectors , input);
  });

  it('1:ValidLogin', () => {
      cy.ValidLogin(selectors , input);
  });
  it('2:InValidLoginpage', () => {    
    cy.InValidLogin(selectors , input);
  });
  it('3:verify the ability to contain the home page tittle', () => {  
    cy.ValidLogin(selectors , input);  
    cy.HomepageTitle(selectors , input);
  });
  it('4:verify the ability to search the menu items in search bar', () => {  
    cy.ValidLogin(selectors , input); 
    cy.search(selectors , input); 
  });
  it('5:verify the personal details page is open', () => {  
    cy.ValidLogin(selectors , input); 
    cy.search(selectors , input); 
    cy.personaldetails(selectors , input);
  });
  it('6:verify the personal detailspage is able to access and enter details', () => {  
    cy.ValidLogin(selectors , input); 
    cy.search(selectors , input); 
    cy.personaldetailsData(selectors , input);
  });
  it('7:verify that the text box shows the error message', () => {  
    cy.ValidLogin(selectors , input); 
    cy.search(selectors , input); 
    //cy.personaldetailsData(selectors , input);
    
    cy.errormessageRequired(selectors , input);
  });
  it('8:verify the profile image page hows the requier message while click the ave without add image', () => {  
    cy.ValidLogin(selectors , input); 
    cy.search(selectors , input);
    cy.personaldetails(selectors , input); 
    cy.profilepictureRequired(selectors , input);
  });
  it('9:Ensure that the userdropdown is available to see the dropdown lists',()=>{
    cy.ValidLogin(selectors , input);
    cy.userdropdown(selectors , input);

  });
  it('10:verifying the logout button is workin and the page is logged out ',()=>{
    cy.ValidLogin(selectors , input);
    cy.logoutfunction(selectors , input);

  });
});
