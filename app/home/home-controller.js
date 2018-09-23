
class HomeController {

    constructor() {

        this.homeTemplate = new HomeTemplate();

        this.summaryData = {
            'balance': 50
        };

    }

    render() {
        this.homeTemplate.render(this.summaryData);
    }

}
