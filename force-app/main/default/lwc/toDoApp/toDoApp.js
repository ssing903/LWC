import { LightningElement } from 'lwc';

export default class ToDoApp extends LightningElement {
    
    helloWold(event) {
        let  myItem = this.template.querySelectorAll('c-to-Item')[0]
        console.log(myItem)
        this.template.querySelectorAll('c-to-Item')[0].itemName = 'Hello World'
    }
}