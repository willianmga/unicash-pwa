
class HomeController {

    constructor() {

        this.homeTemplate = new HomeTemplate();
        this.transactionService = ServiceFactory.getTransactionService();

        this.summaryData = {
            "balance": this.transactionService.getBalance(),
            "historySummary": this.transactionService.getHistorySummary()
        };

    }

    render() {
        this.homeTemplate.render(this.summaryData);
    }

}
