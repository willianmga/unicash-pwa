
class App {

    constructor() {
        this.homeController = new HomeController();
        this.renderHome();
    }

    renderHome() {
        this.homeController.render();
    }

}
