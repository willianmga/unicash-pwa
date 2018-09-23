class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

        this.homeController = new HomeController();
        this.recieveController = new RecieveController();
        this.refondMoneyController = new RefundMoneyController();
        this.addFundsController = new AddFundsController();
        this.paymentController = new PaymentController();
        this.addFundsController = new AddFundsController();
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

    renderRecieveTemplate(){
        this.recieveController.render();
    }

    adicionarValor() {

        const data = {
            "amount": parseFloat(document.querySelector("#valor").value)
        };

        this.addFundsController.addTransaction(data);
    }


}
