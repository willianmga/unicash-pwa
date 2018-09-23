
class TransactionService {

    constructor() {

        this.currentBalance = 7;

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
            }
        ];

    }

    addTransaction(transaction) {

        return new Promise(function(resolve, reject) {

            if (this.checkFounds(transaction)) {
                this.historySummary.push(transaction);
                this.currentBalance = this.currentBalance + transaction.amount;
            } else {
                reject(Error("Saldo insuficiente para executar a transação"));
            }

        });
    }

    checkFounds(transaction) {

        if (transaction.type === "PAGAMENTO" || transaction.type === "RETIRADA") {
            if (this.currentBalance - transaction.amount <= 0) {
                return false;
            }
        }

        return true;
    }

    getBalance() {
        return this.currentBalance;
    }

    getHistorySummary() {
        return this.historySummary;
    }

}
