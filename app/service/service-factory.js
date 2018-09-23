
class ServiceFactory {

    constructor() {

        ServiceFactory.transactionService = new TransactionService();

    }

    static getTransactionService() {
        return ServiceFactory.transactionService;
    }

}
