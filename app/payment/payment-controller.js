
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

        controller.generateQrCode(amount.toString());

        const data = {
            "amount": amount
        };

        this.transactionService.pay(data)
            .then((paymentResponse) => {
                setTimeout(() => controller.renderHome(), 5000);
            })
            .catch((error) => {
                controller.errorMessage(error.message);
            });

    }

}
