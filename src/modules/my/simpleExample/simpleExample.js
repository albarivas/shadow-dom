import { LightningElement } from 'lwc';

export default class SimpleExample extends LightningElement {
    connectedCallback() {
        console.log(this.template.querySelector('h1'));
    }
}
