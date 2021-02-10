import { LightningElement } from 'lwc';

export default class CascadingAndInheritanceContainer extends LightningElement {
    connectedCallback() {
        console.log(this.template.querySelector('h1'));
    }
}
