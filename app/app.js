
class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

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
