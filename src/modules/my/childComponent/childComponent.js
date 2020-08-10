import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    renderedCallback() {
        console.log('CHILD RENDERED CALLBACK');
        console.log(this.template.querySelector('div.second'));
        console.log(this.template.querySelector('div.third')); // found, belongs to child shadow DOM
        console.log(this.querySelector('div.second')); // found, was passed into a slot and actually belongs to parent shadow DOM
        console.log(this.querySelector('div.third'));
    }
}
