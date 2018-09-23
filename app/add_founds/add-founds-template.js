class AddFoundsTemplate {

    render(){
        document.querySelector("#content").innerHTML = `
            <nav class="nav-extended blue">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Unicash</a>
                </div>
            </nav>
            <main>
                <div class="container">
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="valor" type="text" class="validate">
                                <label for="valor">Valor</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="numero-cartao" type="number" class="validate">
                                <label for="numero-cartao">Nº Cartão</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="nome" type="text" class="validate">
                                <label for="nome">Nome</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="validade" type="text" class="validate">
                                    <label for="validade">Validade</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="cod-seguranca" type="number" class="validate">
                                    <label for="cod-seguranca">Código de Segurança</label>
                                </div>
                            </div>
                        </form>
                        <div class="center-align">
                            <button class="btn waves-effect waves-light btn-large blue" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
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
                    <div class="col s3 center-align" onclick="controller.renderHome()">
                        <i class="medium blue-text text-lighten-3 material-icons">perm_identity</i>
                        <span class="medium blue-text text-lighten-3">Perfil</span>
                    </div>
                    <div class="col s3 center-align" onclick="controller.renderAddFoundsTemplate()">
                        <i class="medium blue-text material-icons" >add</i>
                        <span class="medium blue-text">Adicionar</span>
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
        `
    }
}