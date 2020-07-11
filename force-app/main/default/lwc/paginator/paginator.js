
import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    handleNext() {
        //create the custom event
        const nextEvent = new CustomEvent('next',{
            detail : 'Hello world'
        });
        // fire the event
        this.dispatchEvent(nextEvent);
    }

    handlePrev() {
        const prevEvent = new CustomEvent('previous');
        this.dispatchEvent(prevEvent);
    }
}