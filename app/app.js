class App {

    constructor() {
        this.homeController = new HomeController();
        this.addFoundsTemplate = new AddFoundsTemplate();
        this.refoundMoneyTemplate = new RefoundMoneyTemplate();
        this.renderHome();
    }

    renderHome() {
        this.homeController.render();
    }

    renderAddFoundsTemplate() {
        this.addFoundsTemplate.render();
    }

    renderRefoundMoneyTemplate() {
        this.refoundMoneyTemplate.render();
    }

}
