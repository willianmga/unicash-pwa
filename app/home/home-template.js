
class HomeTemplate {

    constructor() {

        console.log(new HomeController().sayHello());

    }

    render() {
        document.querySelector("#content").innerHTML = `
            <nav class="nav-extended blue">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Unicash</a>
                </div>
                <div class="nav-content">
                    <div class="container">
                        <div class="row">
                            <div class="col s12">
                                <h3 class="center-align">R$ 50,00</h3>
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
                    <div class="col s3 center-align">
                        <i class="medium blue-text text-lighten-3 material-icons">add</i>
                        <span class="medium blue-text text-lighten-3">Adicionar</span>
                    </div>
                    <div class="col s3 center-align">
                        <i class="medium blue-text text-lighten-3 material-icons">add</i>
                        <span class="medium blue-text text-lighten-3">Adicionar</span>
                    </div>
                    <div class="col s3 center-align">
                        <i class="medium blue-text material-icons">perm_identity</i>
                        <span class="medium blue-text">Perfil</span>
                    </div>
                    <div class="col s3 center-align">
                        <i class="medium blue-text text-lighten-3 material-icons">add</i>
                        <span class="medium blue-text text-lighten-3">Adicionar</span>
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
