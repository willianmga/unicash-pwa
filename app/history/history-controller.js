
class HistoryController {

    constructor() {
        this.transactionService = ServiceFactory.getTransactionService();
    }

    getBalance() {
        this.transactionService.getBalance();
    }

    getHistorySummary() {
        this.transactionService.getHistorySummary();
    }

}
