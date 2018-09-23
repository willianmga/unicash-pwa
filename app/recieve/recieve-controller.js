class RecieveController {

    constructor (){
        this.recieveTemplate = new RecieveTemplate();
        this.transactionService = ServiceFactory.getTransactionService();
    }

    render() {
        this.recieveTemplate.render();
    }

    recieve(value) {
        const data = {
            "amount": value
        };

        this.transactionService.recieve(data)
            .then((recieveResponse) => {
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