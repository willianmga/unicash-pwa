
class RefundMoneyController {

    constructor() {
        this.transactionsService = ServiceFactory.getTransactionService();
        this.refundMoneyTemplate = new RefundMoneyTemplate();
    }

    render(){
        this.refundMoneyTemplate.render();
    }

    refund(amount) {

        const data = {
            "amount": amount
        };

        this.transactionsService.refund(data)
            .then((refundResponse) => {
                console.log("Deu bom retirada :)");
                console.log(refundResponse);
                controller.renderHome();

            })
            .catch((error) => {

                console.log("Deu ruim a retirada :(");
                console.log(error);

            });

    }

}
