class HomeTemplate {

    render() {
        document.querySelector("#content").innerHTML = `
            <nav class="green darken-1">
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Unicash</a>
                </div>
            </nav>
            <div class="container">
                <h3 class="center-align">R$ 50,00</h3>
                <p class="center-align">Saldo</p>
                <div class="row">
                    <div class="col s12">
                        <div class="card-panel">
                            <span>Multa bibliotecária</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="card-panel">
                            <span>Multa bibliotecária</span>
                        </div>
                    </div>
                </div>
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large green">
                        <i class="large material-icons">add</i>
                    </a>
                </div>
            </div>
        `;
    }
}