
class RefundMoneyController {

    constructor() {
        this.transactionsService = ServiceFactory.getTransactionService();
        this.refundMoneyTemplate = new RefundMoneyTemplate();
    }

    render(){
        let saldo = this.transactionsService.getBalance();
        this.refundMoneyTemplate.render(saldo);
    }

    refund(amount) {

        const data = {
            "amount": amount
        };

        this.transactionsService.refund(data)
            .then((refundResponse) => {
                controller.successMessage(refundResponse.message);
            })
            .catch((error) => {
                controller.errorMessage(error.message);
            });

    }

}
