
class HomeController {

    constructor() {

        this.homeTemplate = new HomeTemplate();
        this.transactionService = ServiceFactory.getTransactionService();
        this.summaryData = {};

    }

    render() {
        this.updateData();
        this.homeTemplate.render(this.summaryData);
    }

    updateData() {
        this.summaryData = {
            "balance": this.transactionService.getBalance(),
            "historySummary": this.transactionService.getHistorySummary()
        };
    }

}
