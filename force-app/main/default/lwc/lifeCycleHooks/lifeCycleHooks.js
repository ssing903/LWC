import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor() {
        super();
        alert('I m in constructor');
    }

    connectedCallback() {
        alert('I m in Connected Callback')
    }

    disconnectedCallback() {
        alert('I m in disconnected Callback')
    }

    renderedCallback() {
        alert('I m in rendered callnback')
    }

    error(error,stack) {
        alert('error callback')
    }
}