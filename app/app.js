class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

        this.homeController = new HomeController();
        this.refondMoneyController = new RefundMoneyController();
        this.addFundsController = new AddFundsController();
        this.paymentController = new PaymentController();
        this.renderHome();
    }

    renderPayment() {
        this.paymentController.render();
    }

    renderHome() {
        this.homeController.render();
    }

    renderAddFundsTemplate() {
        this.addFundsController.render();
    }

    renderRefundMoneyTemplate() {
        this.refondMoneyController.render();
    }

}
