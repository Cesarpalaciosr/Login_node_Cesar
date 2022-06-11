class foot_page extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <section>
            <div class = "colum">
            <div class = "row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z"/></svg>
                <span class="tittle_foot">+58 3636 908</span>   
            </div>
        </div>
        <div class = "colum">
            <div class = "row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"/></svg>
            <span class="tittle_foot">Copyright</span>   
            </div>
        </div>
        <div class = "colum">
            <div class = "row">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 171 171"
style=" fill:#undefined;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,171.99998v-171.99998h171.99998v171.99998z" fill="none"></path><path d="M0.49999,171.49999v-171h171v171z" fill="#cccccc"></path><g fill="#000000"><path d="M99.17986,103.74038v-9.1199c2.05198,-1.01687 7.92064,-8.00272 8.53623,-13.46098c1.61422,-0.12312 4.14956,-1.6051 4.89739,-7.45552c0.40128,-3.14181 -1.19471,-4.90651 -2.16142,-5.46282c0,0 2.40765,-4.57363 2.40765,-10.09573c0,-11.07156 -4.34563,-20.51979 -13.67986,-20.51979c0,0 -3.24213,-6.83993 -13.67986,-6.83993c-19.34332,0 -27.35971,12.40763 -27.35971,27.35971c0,5.03419 2.40765,10.09573 2.40765,10.09573c-0.96671,0.55631 -2.56269,2.32558 -2.16142,5.46282c0.74783,5.85042 3.28317,7.3324 4.89739,7.45552c0.61559,5.45826 6.48425,12.44411 8.53623,13.46098v9.1199c-4.55995,13.67986 -41.03957,4.55995 -41.03957,36.47962h109.43886c0,-31.91967 -36.47962,-22.79976 -41.03957,-36.47962z"></path></g></g></svg>
            <span class="tittle_foot">Creadores: Cesar P</span>   
            </div>
        </div>
        <div class = "colum">
            <div class = "row">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 171 171"
style=" fill:#undefined;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,171.99998v-171.99998h171.99998v171.99998z" fill="none"></path><path d="M0.49999,171.49999v-171h171v171z" fill="#cccccc"></path><g fill="#000000"><path d="M99.17986,103.74038v-9.1199c2.05198,-1.01687 7.92064,-8.00272 8.53623,-13.46098c1.61422,-0.12312 4.14956,-1.6051 4.89739,-7.45552c0.40128,-3.14181 -1.19471,-4.90651 -2.16142,-5.46282c0,0 2.40765,-4.57363 2.40765,-10.09573c0,-11.07156 -4.34563,-20.51979 -13.67986,-20.51979c0,0 -3.24213,-6.83993 -13.67986,-6.83993c-19.34332,0 -27.35971,12.40763 -27.35971,27.35971c0,5.03419 2.40765,10.09573 2.40765,10.09573c-0.96671,0.55631 -2.56269,2.32558 -2.16142,5.46282c0.74783,5.85042 3.28317,7.3324 4.89739,7.45552c0.61559,5.45826 6.48425,12.44411 8.53623,13.46098v9.1199c-4.55995,13.67986 -41.03957,4.55995 -41.03957,36.47962h109.43886c0,-31.91967 -36.47962,-22.79976 -41.03957,-36.47962z"></path></g></g></svg>
            <span class="tittle_foot">Creadores: Jhonny L</span>   
            </div>
        </div>
            </section>
            `   
    }
}

window.customElements.define("foot-page", foot_page);