
class AddFundsController {

    constructor() {

        this.transactionsService = ServiceFactory.getTransactionService();

    }

    addTransaction(data) {

        this.transactionsService.deposit(data).then((transactionResponse) => {


        })
        .catch(error => {

        });

    }

}
