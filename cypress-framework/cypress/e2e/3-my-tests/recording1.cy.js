describe("FirstTestRecording", () => {
  it("tests FirstTestRecording", () => {
    cy.viewport(1912, 467);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("form > div:nth-of-type(1) input").type("Admin");
    cy.get("form > div:nth-of-type(2) input").type("admin123").type("{enter}");
    //cy.type("{enter}");
    cy.get("div:nth-of-type(3) div.orangehrm-dashboard-widget-body > div > div:nth-of-type(1) path").click({ force: true });
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave");
    cy.get("div.oxd-layout-navigation p").click();
    cy.get("header li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });
});
