class head_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <header>
                <div>
                    <h1 class= "title">TWISTER</h1>
                </div>
            </header>
            `   
    }
}

window.customElements.define("head-page", head_page);