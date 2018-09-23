
class HomeTemplate {

    constructor() {

    }

    render(summary) {
        document.querySelector("#content").innerHTML = `
            <nav class="nav-extended blue">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Unicash</a>
                </div>
                <div class="nav-content">
                    <div class="container">
                        <div class="row">
                            <div class="col s12">
                                <h3 class="center-align">R$ ${summary.balance.toFixed(2)}</h3>
                                <p class="center-align">Saldo</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <ul class="collection">
                                <li class="collection-item">Alvin</li>
                                <li class="collection-item">Alvin</li>
                                <li class="collection-item">Alvin</li>
                                <li class="collection-item">Alvin</li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </main>
            <footer class="page-footer footer-fixed grey lighten-4">
                <div class="row">
                    <div class="col s2 center-align" onclick="controller.renderPayment()">
                        <i class="medium blue-text text-lighten-3 material-icons">payment</i>
                        <p class="blue-text text-lighten-3">Pagar</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderPayment()">
                        <i class="medium blue-text text-lighten-3 material-icons">camera</i>
                        <p class="blue-text text-lighten-3">Receber</p>
                    </div>
                    <div class="col s4 center-align" onclick="controller.renderHome()">
                        <i class="medium blue-text material-icons">perm_identity</i>
                        <p class="blue-text">Perfil</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderRefundMoneyTemplate()">
                        <i class="medium blue-text text-lighten-3 material-icons">money</i>
                        <p class="blue-text text-lighten-3">Recuperar</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderAddFundsTemplate()">
                        <i class="medium blue-text text-lighten-3 material-icons">add</i>
                        <p class="blue-text text-lighten-3">Adicionar</p>
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
        `;
    }
}
