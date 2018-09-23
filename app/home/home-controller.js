
class HomeController {

    constructor() {

        this.homeTemplate = new HomeTemplate();
        this.historyController = new HistoryController();

        this.summaryData = {
            "balance": this.historyController.getBalance(),
            "historySummary": this.historyController.getHistorySummary()
        };

    }

    render() {
        this.homeTemplate.render(this.summaryData);
    }

}
