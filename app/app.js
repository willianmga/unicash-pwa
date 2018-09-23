
class App {

    constructor() {
        this.homeController = new HomeController();
        this.renderHome();
    }

    renderLogin() {
        this.loginTemplate.render();
    }

    renderHome() {
        this.homeController.render();
    }
}
