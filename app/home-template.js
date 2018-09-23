class HomeTemplate {

    render() {
        document.querySelector("#content").innerHTML = `
            <nav class="nav-extended green darken-1">
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
                        <div class="card-panel">
                            <span>Multa bibliotecária</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12">
                            <div class="card-panel">
                                <span>Multa bibliotecária</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </main>
            <footer class="page-footer footer-fixed green">
                <div class="row">
                    <div class="col s3">a</div>
                    <div class="col s3">b</div>
                    <div class="col s3">c</div>
                    <div class="col s3">d</div>
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
