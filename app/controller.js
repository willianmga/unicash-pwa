class Controller {

    constructor() {
        this.loginTemplate = new LoginTemplate();
        this.anotherTemplateRender = new AnotherTemplate();
        this.renderLogin();
    }

    renderLogin() {
        this.loginTemplate.render();
    }

    renderAnotherTemplate() {
        this.anotherTemplateRender.render();
    }
}