import { createElement } from 'lwc';
import MyLightningWebComponent from 'my/myLightningWebComponent';

const app = createElement('my-lightning-web-component', {
    is: MyLightningWebComponent
});
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
