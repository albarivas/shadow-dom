import { LightningElement } from 'lwc';

export default class InheritanceVsCascading extends LightningElement {
    connectedCallback() {
        console.log(this.template.querySelector('h1'));
    }
}
