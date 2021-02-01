import { createElement } from 'lwc';
import MyLightningWebComponent from 'my/simpleExample';

const app = createElement('my-simple-example', {
    is: MyLightningWebComponent
});
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
