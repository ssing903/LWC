import { LightningElement } from 'lwc';

export default class ToDoApp extends LightningElement {

    get helloWorld() {
        console.log(this.template.querySelector("test"));
        return "test"
    }
}