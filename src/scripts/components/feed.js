class feed_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class = "division">    
        <section class = "panel-options">
                <div>
                    <span>soy un panel</span>
                </div>
            </section>
        </div>
        
            <div class = "division">
        <section class = "panel-dashboard">
                <div>
                    <span>soy un panel</span>
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