
class AddFundsController {

    constructor() {
        this.addFundsTemplate = new AddFundsTemplate();
        this.transactionsService = ServiceFactory.getTransactionService();
    }

    render() {
        this.addFundsTemplate.render();
    }

    addTransaction(data) {

        this.transactionsService.deposit(data).then((transactionResponse) => {
            console.log("Deu bom a transação :)");
            console.log(transactionResponse);
            controller.renderHome();
        })
        .catch(error => {
            console.log("Deu ruimmmm :(");
            console.log(error);
        });
    }

}
