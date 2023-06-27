import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";

// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --backgroundColour: var(--color-stone-950);
            --titleColour: var(--color-stone-50);
            --subtitleColour: var(--color-amber-500);
        }
        
        #menucard {
            background: var(--backgroundColour);
        }

        h3 {
            color:      var(--titleColour);
        }

        h4 {
            color:      var(--subtitleColour);
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATES                       │
        ╰──────────────────────────────────────────────────────────╯ */

        #menucard:hover {
            color: var(--backgroundColour);
        }

        #menucard:hover h3,
        #menucard:hover h4 {
            color: var(--backgroundColour);
        }



    /*  ╭──────────────────────────────────────────────────────────╮
        │                       MEDIA QUERIES                      │
        ╰──────────────────────────────────────────────────────────╯ */


    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`
    <a id="menustorecard" href="" rel="" title="" target="" class="
        relative
        block
        
        rounded-lg
        w-full
        overflow-hidden
        
        duration-500
        ease-in-out

        hover:outline
        outline-4
        outline-white
        ">

        
            <div id="description" class="
                top-2
                left-2
                absolute
                z-40">
                <h3 class="
                    text-sm">
                </h3>
                <h4 class="
                    text-xs">
                </h4>
            </div>


            <div id="image" class="
                absolute
                z-30
                h-full
                ">
                <slot></slot>
            </div>

        
    </a>


`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class MenuStoreCard extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        // define element
        const element = this.shadowRoot.querySelector("#menustorecard");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);

        // Set Title
        this.shadowRoot.querySelector("h3").innerHTML = this.titleAttribute

        // Set Subtitle
        this.shadowRoot.querySelector("h4").innerHTML = this.subtitleAttribute

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;

        // text position top/bottom
        if (this.textPositionAttribute &&
            this.textPositionAttribute === 'top') {
            this.shadowRoot.querySelector("#description")
                .classList.add('top-2', 'bottom-auto');
        }

        if (this.textPositionAttribute &&
            this.textPositionAttribute === 'bottom') {
            this.shadowRoot.querySelector("#description")
                .classList.add('top-auto', 'bottom-2');
        }

        // add classes to IMG
        const slot = this.shadowRoot.querySelector('#image slot');
        const assignedNodes = slot.assignedElements();
        const imgElement = assignedNodes.find(node => node.tagName === 'IMG');
        if (imgElement) {
            imgElement.style.height = '100%';
            imgElement.style.objectFit = 'cover';
        }


    }

    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯

    get classAttribute() {
        return this.classList;
    }

    get titleAttribute() {
        return this.getAttribute("title");
    }

    get subtitleAttribute() {
        return this.getAttribute("subtitle");
    }

    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }

    get textPositionAttribute() {
        return this.getAttribute("textposition");
    }

}

customElements.define("ldnpk-menustorecard", MenuStoreCard);