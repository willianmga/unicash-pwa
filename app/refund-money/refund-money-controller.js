
class RefundMoneyController {

    constructor() {
        this.transactionsService = ServiceFactory.getTransactionService();
        this.refundMoneyTemplate = new RefundMoneyTemplate();
    }

    render(){
        let saldo = this.transactionsService.getBalance();
        this.refundMoneyTemplate.render(saldo);
    }

    refund(amount) {

        const data = {
            "amount": amount
        };

        this.transactionsService.refund(data)
            .then((refundResponse) => {
                M.toast({
                    html: 'Operação concluída com sucesso',
                    classes: 'green'
                })
                controller.renderHome();
            })
            .catch((error) => {
                M.toast({
                    html: "Ops, ocorreu um erro inesperado",
                    classes: 'red'
                })
            });

    }

}
