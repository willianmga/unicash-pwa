
class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

        this.homeController = new HomeController();

        this.addFundsController = new AddFundsController();
        this.addFundsTemplate = new AddFundsTemplate();
        this.renderHome();
    }

    renderHome() {
        this.homeController.render();
    }

    renderAddFundsTemplate() {
        this.addFundsTemplate.render();
    }

    adicionarValor() {

        const data = {
            "amount": document.querySelector("#valor").value
        };

        this.addFundsController.addTransaction(data);

    }

}
