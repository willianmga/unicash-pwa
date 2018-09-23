
class RecieveTemplate{

    constructor() {

    }

    render() {
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
                    <video style="width: 100%;" id="camera" autoplay></video>
                </div>
            </main>
            <footer class="page-footer footer-fixed grey lighten-4">
                <div class="row">
                    <div class="col s2 center-align" onclick="controller.renderPayment()">
                        <i class="medium blue-text text-lighten-3 material-icons">payment</i>
                        <p class="medium blue-text text-lighten-3">Pagar</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderRecieveTemplate()">
                        <i class="medium blue-text material-icons">camera</i>
                        <p class="medium blue-text ">Receber</p>
                    </div>
                    <div class="col s4 center-align" onclick="controller.renderHome()">
                        <i class="medium blue-text text-lighten-3 material-icons">perm_identity</i>
                        <p class="medium blue-text text-lighten-3">Perfil</p>
                    </div>
                    <div class="col s2 center-align" onclick="controller.renderRefundMoneyTemplate()">
                        <i class="medium blue-text text-lighten-3 material-icons">money</i>
                        <p class="medium blue-text text-lighten-3">Recuperar</p>
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
            `
        var video = document.getElementById('camera');

        const qr = new QCodeDecoder();

        qr.decodeFromCamera(video, function(er,res) {
            console.log("Mensagem");
            console.log(res);
            console.log("Erro");
            console.log(er);

            if (res !== undefined) {
                controller.recieve(res);
                qr.close();
            }

        }, true);

        console.log("Cheguei no finalll");

    }

}
