
class App {

    constructor() {
        this.homeTemplate = new HomeTemplate();
        this.renderHome();
    }

    renderLogin() {
        this.loginTemplate.render();
    }

    renderHome() {
        this.homeTemplate.render();
    }
}
