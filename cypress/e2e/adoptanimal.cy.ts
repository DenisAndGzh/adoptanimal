/* eslint-disable cypress/no-unnecessary-waiting */

describe("Adoptanimal", () => {
  it("visits home page", () => {
    cy.visit("/");
    cy.contains("Adoptanimal");
    cy.contains("Are u looking for adopting a pet?");
    cy.wait(2000);
  });
  it("visits adopt page", () => {
    cy.visit("/adopt");
    cy.contains("Animals Awaiting Adoption");
    cy.wait(2000);
  });
  it("add favourite in adopt", () => {
    const fa = cy.get("button").eq(1)!;
    cy.wait(4000);
    fa.click();
  });
  it("go to pet info page", () => {
    const mi = cy.get("a").eq(5)!;
    cy.wait(1000);
    mi.click();
  });
  it("goto questionandanswer", () => {
    cy.visit("/questionandanswer");
    cy.wait(2000);
  });
  it("goto contact", () => {
    cy.visit("/contact");
    cy.wait(2000);
  });
  it("Leaving your message", () => {
    const name = cy.get("input").eq(1)!;
    const email = cy.get("input").eq(2)!;
    const message = cy.get("textarea").eq(0)!;
    name.type("test");
    email.type("123@123");
    message.type("test_test");
    cy.get("button").eq(0).click();
    cy.wait(2000);
  });
  it("search", () => {
    cy.visit("/");
    const search = cy.get("input").eq(0)!;
    search.type("1").type("{enter}");
    cy.wait(2000);
  });
  it("goto favourite", () => {
    cy.visit("/favorite");
    cy.wait(4000);
  });
  it("delect", () => {
    cy.get("button").eq(0)!.click();
  });
});
