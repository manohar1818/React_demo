import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";
//const user_data = require("../../fixtures/gallery_data.json");

export class Dependencies extends BaseDependencies {
  visitLoginPage() {
    this.accessUrl("http://localhost:3000/");
  }
  visitHomePage() {
    this.accessUrl("http://localhost:3000/home");
  }

}

export class RobotEyes extends BaseEyes {
  seesLoginPage() {
    this.seesDomVisible("Login page");
  }

  seesHomeUrl() {
    this.seesPathNameInUrl("/homepage");
  }
  seesGalleryUrl() {
    this.seesPathNameInUrl("/gallery");
  }
  seesContactUrl() {
    this.seesPathNameInUrl("/contact");
  }
  seesAboutUrl() {
    this.seesPathNameInUrl("/about");
  }
  seesGalleryAdminUrl() {
    this.seesPathNameInUrl("/gallery-admin");
  }

  seesLoginTitle() {
    this.containsText("LoginPage");
  }
  seesContactTitle() {
    this.containsText("connect with me");
  }

  seesScheduledUrl() {
    this.seesPathNameInUrl("/schedule");
  }
  seesArchiveUrl() {
    this.seesPathNameInUrl("/archive");
  }
  seesGalleryElement(){
    this.containsText("Gallery");
    cy.get("[data-testid=headerElement]").contains("Gallery").should("exist");
  }
  seesContactElement(){
    this.containsText("Contact");
    cy.get("[data-testid=headerElement]").contains("Contact").should("exist");
  }
  seesAboutElement(){
    this.containsText("About");
    cy.get("[data-testid=headerElement]").contains("About").should("exist");
  }
  seesGalleryAdminElement(){
    this.containsText("GalleryAdmin");
    cy.get("[data-testid=headerElement]").contains("GalleryAdmin").should("exist");
  }
  seesLogout(){
    this.containsText("Logout");
    cy.get("[data-testid=headerElement]").contains("Logout").should("exist");
  }

  seesLoginFormFields() {
    this.seesPathNameInUrl("/");
    this.containsText("Email");
    this.containsText("Password");
    this.containsText("Remember everything that matters");

    cy.get("[data-testid=emailInput]").should("exist");
    cy.get("[data-testid=passwordInput]").should("exist");
  }
  seesContactFormFields() {
    this.containsText("Name");
    this.containsText("Email");
    this.containsText("Message");  

    cy.get("[data-testid=input]").should("exist");
   
  }


  seesLoginButton() {
    //this.containsText("LOGIN");
    //cy.get("[data-testid=button]").contains("LOGIN");
    cy.get("[data-testid=login]").should("exist");
  }
  seesNameErrorMessage() {
    
    this.containsText("invalid name");
  }
  seesEmailErrorMessage() {
   
    this.containsText("invalid email");
  }
  seesMessageErrorMessage() {
    
    this.containsText("invalid message");
  }

  
  seesUpdatedContactFormData() {
    cy.get("[data-testid=Name]").should("have", "ram");
    cy.get("[data-testid=Email]").should("have", "ram@gmail.com");
    cy.get("[data-testid=Message]").should("have", "hii");
  }


  seesHomepageNavbarContents() {
    cy.get("[data-testid=header]").should("exist");
    cy.get("[data-testid=headerElement]").should("exist");
    //cy.get("[data-testid=LOGOUT]").should("exist");
  }
  seesHomepageIntroduction(){
    this.containsText("Hii there,this is Ruchitha");
    this.containsText("Full Stack Developer Intern");
  }
  seeImage(){
    cy.get("[data-testid=image]").should("exist");
  }

  
  seesSubmitShoubBeDisabled(){
    this.seesDomDisabled("[data-testid=submit]")
  }
  seesSubmitShoubBeEnabled(){
    this.seesDomEnabled("[data-testid=submit]")
  }
  seesAddShoubBeDisabled(){
    this.seesDomDisabled("[data-testid=Add]")
  }
  seesAddShoubBeEnabled(){
    this.seesDomEnabled("[data-testid=Add]")
  }
  

  seesAboutInformation(){
    this.containsText("I am Ruchitha from Keshav Memorial Institute of Technology.I'm passionate about coding and learning new technologies.In free time I like to chill at home watching movies and colouring .I love to be surrounded by positive and motivating people.")
    cy.get("[data-testid=aboutCard]").should("exist");
    this.containsText("Technical Skills");
    this.containsText("Projects");
  }
  seesGalleryAdminInformation(){
    cy.get("[data-testid=Add]").should("exist");
    cy.get("[data-testid=imageCard]").should("exist");
   

  }
  seesImageCardInformation(){
    cy.get("[data-testid=image").should("exist");
    cy.get("[data-testid=editIcon]").should("exist");
    cy.get("[data-testid=deleteIcon]").should("exist");

  }
  seesAddImageForm(){
    this.containsText("Add Image");
    this.containsText("Name");
    this.containsText("Url");
    cy.get("[data-testid=Add]").should("exist");

    cy.get("[data-testid=input]").should("exist");
   
   
  }
  SeesAddImageFormErrorMessages(){
    this.containsText("invalid name");
    this.containsText("invalid url");

  }
  seesNewImageCard(){
    this.containsText("forest7");
  }
  seesUpdatedFirstImageCard(){
    this.containsText("Forest112");
  }
  seesFirstImageCardShouldBeDeleted(){
    cy.get("[data-testid=imageCard]").first().contains("Forest2");
  }
}

export class RobotHands extends BaseHands {
  
  updateNameFieldWithInvalidData() {
    cy.get("[data-testid=Name]").type("ram");
    cy.get("[data-testid=Name]").clear();

  }

  updateEmailFieldWithInvalidData() {
    cy.get("[data-testid=Email]").type("ram");
  }
  updateMessageFieldWithInvalidData() {
    cy.get("[data-testid=Message]").type("hii");
    cy.get("[data-testid=Message]").clear();
  }

  

  updateLoginFormFields() {
    cy.get("[data-testid=emailInput]").clear();
    //cy.get("[data-testid=emailInput]").type(user_data.email);
    cy.get("[data-testid=passwordInput]").clear();
    //cy.get("[data-testid=passwordInput]").type(user_data.password);
  }
 updateContactFormFields(){
  cy.get("[data-testid=Name]").type("ram");
  cy.get("[data-testid=Email]").clear();
  cy.get("[data-testid=Email]").type("ram@gmail.com");
  cy.get("[data-testid=Message]").type("hii");

 }
  clickAddButton() {
    cy.get("[data-testid=Add]").click();
  }
  clickLogin() {
    cy.get("[data-testid=login]").click();
  }
  clickGallery(){
    cy.get("[data-testid=headerElement]").contains("Gallery").click();
  }
  clickContact(){
    cy.get("[data-testid=headerElement]").contains("Contact").click();
  }
  clickAbout(){
    cy.get("[data-testid=headerElement]").contains("About").click();
  }
  clickGalleryAdmin(){
    cy.get("[data-testid=headerElement]").contains("GalleryAdmin").click();
  }
  fillAddImageFormWithWrongDetails(){
    cy.get("[data-testid=Name]").type("forest8");
    cy.get("[data-testid=Name]").clear();
    cy.get("[data-testid=Url]").type("abc");
   
  }
  fillAddImageFormWithCorrectDetails(){
    cy.get("[data-testid=Name]").type("forest7");
    cy.get("[data-testid=Url]").clear();

    cy.get("[data-testid=Url]").type("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80");
  }

  updateFirstImageCard(){
    cy.get("[data-testid=editIcon]").first().click();
    this.wait(2000);
    cy.get("[data-testid=inputAtom]").first().type("12");
    this.wait(3000);
    cy.get("[data-testid=save]").click();
    this.wait(1000);

  }
  deleteFirstImageCard(){
    cy.get("[data-testid=deleteIcon]").first().click();
    

  }

}