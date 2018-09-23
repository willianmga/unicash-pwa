
class AddFundsController {

    constructor() {
        this.addFundsTemplate = new AddFundsTemplate();
        this.transactionsService = ServiceFactory.getTransactionService();
    }

    render() {
        this.addFundsTemplate.render();
    }

    deposit(data) {

        this.transactionsService.deposit(data)
            .then((transactionResponse) => {
                controller.successMessage(transactionResponse.message);
            })
            .catch(error => {
                controller.errorMessage(error.message);
            });
    }

}
