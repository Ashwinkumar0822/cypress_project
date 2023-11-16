
class landing {
    landingpage(selectors, input) {
        cy.visit(selectors.url);
        cy.title().should('contain', input.title);
        cy.wait(5000)
    };
};

export default landing;