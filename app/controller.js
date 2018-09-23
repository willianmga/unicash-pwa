class Controller {

    constructor() {
        this.loginTemplate = new LoginTemplate();
        this.homeTemplate = new HomeTemplate();
        this.renderLogin();
    }

    renderLogin() {
        this.loginTemplate.render();
    }

    renderHome() {
        this.homeTemplate.render();
    }
}