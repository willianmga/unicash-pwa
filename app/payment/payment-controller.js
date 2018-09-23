
class PaymentController {

    constructor() {
        this.transactionService = ServiceFactory.getTransactionService();
        this.paymentTemplate = new PaymentTemplate();
    }

    render() {
        this.paymentTemplate.render();
    }

    pay(amount) {

        if (isNaN(amount)) {
            throw new Error("Valor informado inválido!");
        }

        const data = {
            "amount": amount
        };

        this.transactionService.pay(data)
            .then((paymentResponse) => {
                controller.generateQrCode(amount.toString());
                setTimeout(() => controller.renderHome(), 5000);
            })
            .catch((error) => {
                controller.errorMessage(error.message);
            });

    }

}
