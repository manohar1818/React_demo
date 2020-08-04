import {
  RobotEyes,
  RobotHands,
  Dependencies
} from "../../robots/portfolio/Robot";



context("Home Page", () => {
  const robotEyes = new RobotEyes();
  const robotHands = new RobotHands();
  const dependencies = new Dependencies();

  
  // describe("Login page should be visible with login button and LoginPage title", () => {
  //   it("navigate to Login Page", () => {
  //     dependencies.visitLoginPage();
  //   });
  //   it("search for the login button", () => {
  //     robotEyes.seesLoginButton();
      
  //   });
  //   it("search for the login title", () => {
  //     robotEyes.seesLoginTitle();
      
  //   });
  //   it("click on login button", () => {
  //     robotEyes.seesLoginTitle();
  //     robotHands.clickLogin();
  //   });

  // });

  describe("Home page", () => {
      it("navigate to Home Page", () => {
        dependencies.visitHomePage();
      });
      it("should have Nav bar contents", () => {
        robotHands.wait(2000);
        robotEyes.seesHomepageNavbarContents();
      });
      it("should have introduction", () => {
        
        robotEyes.seesHomepageIntroduction();
      });
      it("should have image", () => {
        
        robotEyes.seeImage();
      });
      it("clicking on gallery", () => {
        
        robotEyes.seesGalleryElement();
        robotHands.clickGallery();
        robotHands.wait(1000);
      });
      
    });
    describe("Gallery page", () => {
      it("after clicking on Gallery,redirecting to gallery page", () => {
        robotEyes.seesGalleryUrl();
      });
      it("should have images", () => {
       
        robotEyes.seeImage();
      });
      it("clicking on Contact", () => {
        
        robotEyes.seesContactElement();
        robotHands.clickContact();
        robotHands.wait(1000);
      });
    });

    describe("Contact page", () => {
      it("after clicking on Contact,redirecting to contact page", () => {
        robotEyes.seesContactUrl();
      });
     
        it("search for the title,userName and Password fields", () => {
          
          robotEyes.seesContactTitle();
          robotEyes.seesContactFormFields();
        });
         
        it("submit button should be disabled by default", () => {
          
          robotEyes.seesSubmitShoubBeDisabled();
        });
       
    });
    describe("Filling the contact form  with invalid data", () => {
      it("change Name with invalid data", () => {
        robotHands.updateNameFieldWithInvalidData();
        //robotHands.wait(1000);
      });
  
      it("sees name error message", () => {
        robotEyes.seesNameErrorMessage();
        robotHands.wait(1000);
      });
      it("change Email with invalid data", () => {
        robotHands.updateEmailFieldWithInvalidData();
        //robotHands.wait(1000);
      });
  
      it("sees email error message", () => {
        robotEyes.seesEmailErrorMessage();
        robotHands.wait(1000);
      });
      it("change Message with invalid data", () => {
        robotHands.updateMessageFieldWithInvalidData();
        //robotHands.wait(1000);
      });
  
      it("sees message error message", () => {
        robotEyes.seesMessageErrorMessage();
        robotHands.wait(1000);
      });

    });

    describe("Filling the contact form with  valid data", () => {
      it("change Name ,Email and Message fields", () => {
        robotHands.updateContactFormFields();
        robotHands.wait(1000);
      });
      it("sees updated username and password fields", () => {
        robotHands.wait(1000);
        robotEyes.seesUpdatedContactFormData();
      });
      it("submit button should be enabled", () => {
          
        robotEyes.seesSubmitShoubBeEnabled();
      });
      it("clicking on About", () => {
        
        robotEyes.seesAboutElement();
        robotHands.clickAbout();
        robotHands.wait(1000);
      });
     
         
    });

    describe("About page", () => {
      it("after clicking on About,redirecting to about page", () => {
        robotEyes.seesAboutUrl();
      });
     
        it("search for the about,technical skills,projects", () => {
          
          robotEyes.seesAboutInformation();
          
        });
        it("clicking on Gallery Admin", () => {
        
          robotEyes.seesGalleryAdminElement();
          robotHands.clickGalleryAdmin();
        });
      
       
    });

    describe("Gallery Admin page", () => {
      it("after clicking on Gallery Admin,redirecting to Gallery Admin page", () => {
        robotEyes.seesGalleryAdminUrl();
      });
     
        it("search for the add button and image card", () => {
          
          robotEyes.seesGalleryAdminInformation();
          
        });

        it("search for the add button and image card", () => {
          
          robotEyes.seesGalleryAdminInformation();
          
        });

        it("search for editicon,deleteicon and image in image card", () => {
          
          robotEyes.seesImageCardInformation();
          
        });      
        
      
       
    });

    describe("Adding an image ", () => {
     
   it(" clicks on add button", () => {
    robotHands.wait(1000);
    robotHands.clickAddButton();
  });
  it(" AddImage form is visible", () => {
    robotEyes.seesAddImageForm();
  });

it("add button should be disabled by default", () => {
          
          robotEyes.seesAddShoubBeDisabled();
        });

        it("filling the add image form with wrong details", () => {
          
          robotHands.fillAddImageFormWithWrongDetails();
        });
        it("sees error messages", () => {
          
          robotEyes.SeesAddImageFormErrorMessages();
        });

         it("filling the add image form with correct details", () => {
          
          robotHands.fillAddImageFormWithCorrectDetails();
        });
        it("add button should be enabled ,click on that button", () => {
          
          robotEyes.seesAddShoubBeEnabled();
          robotHands.clickAddButton();
        });
        it("new imageCard should be added", () => {
          
          robotEyes.seesNewImageCard();
          robotHands.wait(2000);
          
        });
    });

    describe("Editing image card ", () => {
      it("Name of the image is changed", () => {
          
        robotHands.updateFirstImageCard();
        robotHands.wait(1000);
      });
      it("sees updated image card", () => {
          
        robotEyes.seesUpdatedFirstImageCard();
        robotHands.wait(1000);
        
      });
      describe("Deleting image card ", () => {
        it("Image is deleted", () => {
            
          robotHands.deleteFirstImageCard();
          robotHands.wait(1000);
        });
        it("sees  image card is deleted", () => {
            
          robotEyes.seesFirstImageCardShouldBeDeleted();
          robotHands.wait(1000);
          
        });


    });
   
 




});