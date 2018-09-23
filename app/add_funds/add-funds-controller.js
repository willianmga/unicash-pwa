
class AddFundsController {

    constructor() {
        this.addFundsTemplate = new AddFundsTemplate();
        this.transactionsService = ServiceFactory.getTransactionService();
    }

    render() {
        this.addFundsTemplate.render();
    }

    deposit(data) {

        this.transactionsService.deposit(data).then((transactionResponse) => {
            M.toast({
                html: 'Transação concluída com sucesso',
                classes: "green"
            })
            console.log(transactionResponse);
            controller.renderHome();
        })
        .catch(error => {
            M.toast({
                html: 'Ops, ocorreu um erro inesperado!',
                classes: "red"
            })
        });
    }

}
