
class PaymentController {

    constructor() {
        this.transactionService = ServiceFactory.getTransactionService();
        this.paymentTemplate = new PaymentTemplate();
    }

    render() {
        this.paymentTemplate.render();
    }

    pay(amount) {

        controller.generateQrCode("https://github.com/willianmga/unicash-pwa");

        const data = {
            "amount": amount
        };

        this.transactionService.pay(data)
            .then((paymentResponse) => {

                console.log("Deu bom no pagamento :)");
                console.log(paymentResponse);

                setTimeout(() => controller.renderHome(), 5000);

            })
            .catch((error) => {

                console.log("Deu ruim no pagamento :(");
                console.log(error);

            });

    }

}
