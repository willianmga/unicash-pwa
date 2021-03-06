class RefundMoneyTemplate{

    render(saldo){
        document.querySelector("#content").innerHTML = `
            <nav class="nav-extended blue">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Unicash</a>
                </div>
            </nav>
            <main>
                <div class="container">
                <br>
                <br>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <label>Banco</label>
                            <select class="browser-default">
                                <option value="0" selected>Itau S/A</option>
                                <option value="1">Bradesco</option>
                                <option value="2">Banco do Brasil</option>
                                <option value="3">Caixa</option>
                                <option value="4">Santander</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="agencia" type="number" class="validate text-blue">
                            <label for="agencia">Agência</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="conta" type="text" class="validate text-blue">
                            <label for="conta">Conta</label>
                            </div>
                        </div>
                        <div class="row">
                            <label>Tipo de Conta</label>
                            <select class="browser-default">
                                <option value="0" selected>Conta Corrente</option>
                                <option value="1">Conta Poupança</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="valor" type="number" class="validate text-blue">
                            <label for="valor">Valor</label>
                            </div>
                            <div class="col s6">
                                <br>
                                <p>Saldo: R$ ${saldo.toFixed(2)}</p>
                            </div>
                        </div>
                    </form>
                    <div class="center-align">
                        <button class="btn waves-effect waves-light btn-large blue" name="action" onclick="controller.refund()">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </main>
            <footer class="page-footer footer-fixed grey lighten-4">
                <div class="row">
                    <div class="col s2 center-align" onclick="controller.renderPayment()">
                        <i class="medium blue-text text-lighten-3 material-icons">payment</i>
                        <p class="medium blue-text text-lighten-3">Pagar</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderRecieveTemplate()">
                        <i class="medium blue-text text-lighten-3 material-icons">camera</i>
                        <p class="medium blue-text text-lighten-3">Receber</p>
                    </div>
                    <div class="col s4 center-align" onclick="controller.renderHome()">
                        <i class="medium blue-text text-lighten-3 material-icons">perm_identity</i>
                        <p class="medium blue-text text-lighten-3">Perfil</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderRefundMoneyTemplate()">
                        <i class="medium blue-text material-icons">money</i>
                        <p class="medium blue-text">Recuperar</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderAddFundsTemplate()">
                        <i class="medium blue-text text-lighten-3 material-icons" >add</i>
                        <p class="medium blue-text text-lighten-3">Adicionar</p>
                    </div>
                </div>
            </footer>       
            <style>
            .page-footer.footer-fixed {
                position: fixed;
                bottom: 0;
                width: 100%;
            }
            </style>   
            <script>
                $(document).ready(function(){
                    $('select').formSelect();
                })
            </script>           
        `;
    }

}
