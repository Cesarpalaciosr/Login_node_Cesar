class foot_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <section>
                <div>
                    
                </div>
            </section>
            `   
    }
}

window.customElements.define("foot-page", foot_page);