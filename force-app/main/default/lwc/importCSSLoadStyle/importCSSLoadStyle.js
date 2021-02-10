import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import myStyles from '@salesforce/resourceUrl/myStyles'

export default class ImportCSSLoadStyle extends LightningElement {
  loadStyles() {
    loadStyle(this, myStyles);
  }
}