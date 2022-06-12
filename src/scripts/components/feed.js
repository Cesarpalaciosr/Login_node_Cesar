class feed_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class = "division">    
        <section class = "panel-options">
                <div>
                    <h3>soy un panel</h3>
                </div>
            </section>
        </div>
        
            <div class = "division">
        <section class = "panel-dashboard">
                <div>
                    <h3>soy un panel</h3>
                </div>
        </section>
        </div>
        <div class = "division">
        <section class = "panel-trending">
                <div>
                    <h3>soy un panel</h3>
                </div>
        </section>
        </div>
            `   
    }
}

window.customElements.define("feed-page", feed_page);