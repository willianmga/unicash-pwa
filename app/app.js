class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

        this.homeController = new HomeController();
        this.refoundMoneyTemplate = new RefoundMoneyTemplate();
        this.addFundsTemplate = new AddFundsTemplate();
        this.renderHome();
    }

    renderHome() {
        this.homeController.render();
    }

    renderAddFundsTemplate() {
        this.addFundsTemplate.render();
    }

    renderRefoundMoneyTemplate() {
        this.refoundMoneyTemplate.render();
    }

}
