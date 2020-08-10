import { LightningElement } from 'lwc';

export default class SlotsExample extends LightningElement {
    renderedCallback() {
        console.log('PARENT RENDERED CALLBACK');
        console.log(this.template.querySelector('div.first')); // found, belongs to parent shadow DOM
        console.log(this.template.querySelector('div.second')); // found, belongs to parent shadow DOM
        console.log(this.querySelector('div.first'));
        console.log(this.querySelector('div.second'));
    }
}
