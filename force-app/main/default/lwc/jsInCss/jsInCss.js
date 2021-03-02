import { LightningElement, api } from "lwc";

export default class JsInCss extends LightningElement {
    @api backgroundColor;
    @api fontColor;

    renderedCallback() {
        this.template
            .querySelector(".container")
            .style.setProperty("--my-bg-color", this.backgroundColor);
        this.template
            .querySelector(".container")
            .style.setProperty("--my-font-color", this.fontColor);
    }
}
