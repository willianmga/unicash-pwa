class App {

    constructor() {
        this.serviceFactory = new ServiceFactory();

        this.homeController = new HomeController();
        this.recieveController = new RecieveController();
        this.refundMoneyController = new RefundMoneyController();
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
        this.refundMoneyController.render();
    }

    renderRecieveTemplate(){
        this.recieveController.render();
    }

    deposit() {

        const data = {
            "amount": parseFloat(document.querySelector("#valor").value)
        };

        this.addFundsController.deposit(data);
    }

    refund() {

        const amount = parseFloat(document.querySelector("#valor").value);

        this.refundMoneyController.refund(amount);

    }

    pay() {
        document.querySelector("#qrcode-disabled").style.display = 'none';

        const amount = parseFloat(document.querySelector("#valor").value);

        this.paymentController.pay(amount);

    }

    generateQrCode(value) {
        new QRCode(document.getElementById("qrcode"), value);
    }

    recieve(qrCode){
        let value = parseFloat(qrCode);
        this.recieveController.recieve(value);
    }

    successMessage(message) {

        M.toast({
            html: message,
            classes: "green"
        });

        controller.renderHome();
    }

    errorMessage(message) {

        M.toast({
            html: message,
            classes: "red"
        });

    }

    camera() {



    }

}
