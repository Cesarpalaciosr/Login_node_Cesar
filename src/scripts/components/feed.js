class feed_page extends HTMLElement {
    constructor(){
        super();
      /*  document.addEventListener("click", send);*/


    }

    connectedCallback(){
        this.innerHTML = `
        <div class = "division">    
        <section class = "panel-options">
                <div>
                <nav class = "nav-button">
                <div class ="options">
                    <button class= "button" href="" class="nav-link">Inicio</button>
                    <button class= "button" href="" class="nav-link">Borrar</button>
                    <button class= "button" href="" class="nav-link">Actualizar</button>
                    <button class= "button" href="" class="nav-link">Ayuda</button>
                    <button class= "button" type="button" id = "logout" >logout</button> 
                    </nav>
                    </div>
                </div>
            </section>
        </div>
        
            <div class = "division">
        <section class = "panel-dashboard">
                <div>
                    <div class="buscar">
                        <input class = "input" type="text" placeholder="Buscar">
                        <div class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="50" height="50"
                        viewBox="-7 -5 60 60"
                        style=" fill:#fffffff;"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path></svg>
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