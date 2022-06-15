class feed_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class = "division">    
        <section class = "panel-options">
                <div>
                <nav>
                <div class ="options">
                    <a href="" class="nav-link">Inicio</a>
                    <a href="" class="nav-link">Borrar</a>
                    <a href="" class="nav-link">Actualizar</a>
                    <a href="" class="nav-link">Ayuda</a>
                    <a href="" class="nav-link">Salir</a>
                    </nav>
                    </div>
                </div>
            </section>
        </div>
        
            <div class = "division">
        <section class = "panel-dashboard">
                <div>
                    <div class="buscar">
                        <input type="text" placeholder="Buscar">
                        <div class="btn">
                        <i class="fas fa-search icon"></i>
                    </div>
            </div>
                </div>
        </section>
        </div>
        <div class = "division">
        
        <section class = "panel-trending">
                <div>
                    <span>soy un panel</span>
                </div>
        </section>
        </div>
            `   
    }
}

window.customElements.define("feed-page", feed_page);