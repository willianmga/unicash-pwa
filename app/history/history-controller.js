
class HistoryController {

    constructor() {

        this.currentBalance = 0;

        this.historySummary = [
            {
                "type": "DEPOSITO",
                "amount": 25,
                "description": "Deposito Dinheiro",
                "timestamp": "2018-09-23 12:00:00",
                "balance": 25
            },
            {
                "type": "RECEBIMENTO",
                "amount": 15,
                "description": "Crédito Melhores Alunos",
                "timestamp": "2018-09-23 12:00:00",
                "balance": 40
            },
            {
                "type": "PAGAMENTO",
                "amount": -13,
                "description": "Cantina do Bloco 5",
                "timestamp": "2018-09-23 12:00:00",
                "balance": 27
            },
            {
                "type": "PAGAMENTO",
                "amount": -10,
                "description": "Cópia de Prova - Unicesumar",
                "timestamp": "2018-09-23 12:00:00",
                "balance": 7
            },
            {
                "type": "RETIRADA",
                "amount": -7,
                "description": "Retirada Conta Corrente",
                "timestamp": "2018-09-23 12:00:00",
                "balance": 0
            }
        ];

    }

    getBalance() {
        return this.currentBalance;
    }

    getHistorySummary() {
        return this.historySummary;
    }

}
