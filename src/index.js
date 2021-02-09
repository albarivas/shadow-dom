import { createElement } from 'lwc';
//import '@lwc/synthetic-shadow';
import MyLightningWebComponent from 'my/simpleExampleContainer';

const app = createElement('my-simple-example-container', {
    is: MyLightningWebComponent
});

// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
