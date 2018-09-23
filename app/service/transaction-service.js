
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

    deposit(data) {

        return new Promise(function (resolve, reject) {

            if (!this._checkCard(data)) {
                reject("Dados do cartão de crédito inválidos.");
            }

            const transaction = {
                "type": "DEPOSITO",
                "amount": data.amount,
                "description": "Deposito Dinheiro",
                "timestamp": new Date()
            };

            resolve(this._addTransaction(transaction));

        });

    }

    _addTransaction(transaction) {

        if (this._checkFunds(transaction)) {

            this.historySummary.push(transaction);
            this.currentBalance = this.currentBalance + transaction.amount;

            return {
                "status": "SUCESSO",
                "currentBalance": this.currentBalance,
                "timestamp": new Date()
            }

        }

        throw new Error("Saldo insuficiente para executar a transação");
    }

    _checkFunds(transaction) {

        if (transaction.type === "PAGAMENTO" || transaction.type === "RETIRADA") {
            if (this.currentBalance - transaction.amount <= 0) {
                return false;
            }
        }

        return true;
    }

    _checkCard(data) {
        return true;
    }

    getBalance() {
        return this.currentBalance;
    }

    getHistorySummary() {
        return this.historySummary;
    }

}
