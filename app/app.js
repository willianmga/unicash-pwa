
class App {

    constructor() {
        this.homeController = new HomeController();
        this.addFoundsTemplate = new AddFoundsTemplate();
        this.renderHome();
    }

    renderHome() {
        this.homeController.render();
    }

    renderAddFoundsTemplate() {
        this.addFoundsTemplate.render();
    }

}
