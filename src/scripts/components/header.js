class head_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <section>
                <div>
                    <h1 class= "tittle">TWISTER</h1>
                </div>
            </section>
            `   
    }
}

window.customElements.define("head-page", head_page);