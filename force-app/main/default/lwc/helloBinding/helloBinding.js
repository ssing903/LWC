import { LightningElement,track } from 'lwc';

export default class HelloBinding extends LightningElement {
    //greeting = '';
    @track greeting = '';
    handleChange(event) {
        this.greeting = event.detail.value
    }
}