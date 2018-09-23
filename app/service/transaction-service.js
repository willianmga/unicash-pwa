
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

        let ctr = this;

        return new Promise(function (resolve, reject) {

            if (!ctr._checkCard(data)) {
                reject("Dados do cartão de crédito inválidos.");
            }

            const transaction = {
                "type": "DEPOSITO",
                "amount": data.amount,
                "description": "Deposito Dinheiro",
                "timestamp": new Date()
            };

            try {
                resolve(ctr._addTransaction(transaction));
            } catch (e) {
                reject(e);
            }

        });

    }

    refund(data) {

        let ctr = this;

        return new Promise(function (resolve, reject) {

            if (!ctr._checkBankData(data)) {
                reject("Dados bancários inválidos");
            }

            const transaction = {
                "type": "RETIRADA",
                "amount": data.amount,
                "description": "Retirada Dinheiro",
                "timestamp": new Date()
            };

            try {
                resolve(ctr._addTransaction(transaction));
            } catch (e) {
                reject(e);
            }
        });

    }

    pay(data) {

        let ctr = this;

        return new Promise(function (resolve, reject) {

            const transaction = {
                "type": "PAGAMENTO",
                "amount": data.amount,
                "description": "Pagamento Cantina Bloco 8",
                "timestamp": new Date()
            };

            try {
                resolve(ctr._addTransaction(transaction));
            } catch (e) {
                reject(e);
            }

        });

    }

    _addTransaction(transaction) {

        if (isNaN(transaction.amount)) {
            throw new Error("Valor informado não é um valor válido!");
        }

        if (this._checkFunds(transaction)) {

            this._updateCurrentBalance(transaction);
            this.historySummary.push(transaction);

            return {
                "status": "SUCESSO",
                "message": "Transação realizada com sucesso!",
                "currentBalance": this.currentBalance,
                "timestamp": new Date()
            }

        }

        throw new Error("Saldo insuficiente para executar a transação");
    }

    _updateCurrentBalance(transaction) {

        if (transaction.type === "DEPOSITO" || transaction.type === "RECEBIMENTO") {
            this.currentBalance += transaction.amount;
        } else if (transaction.type === "PAGAMENTO" || transaction.type === "RETIRADA") {
            this.currentBalance -= transaction.amount;
        } else {
            throw new Error("Tipo de transação desconhecida. Impossível continuar");
        }

    }

    _checkFunds(transaction) {

        if (transaction.type === "PAGAMENTO" || transaction.type === "RETIRADA") {
            if (this.currentBalance - transaction.amount < 0) {
                return false;
            }
        }

        return true;
    }

    _checkCard(data) {
        return true;
    }

    _checkBankData(data) {
        return true;
    }

    getBalance() {
        return this.currentBalance;
    }

    getHistorySummary() {
        return this.historySummary;
    }

}
