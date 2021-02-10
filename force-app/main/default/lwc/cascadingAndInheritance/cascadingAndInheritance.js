import { LightningElement } from 'lwc';

export default class CascadingAndInheritance extends LightningElement {
    connectedCallback() {
        console.log(this.template.querySelector('h1'));
    }
}
