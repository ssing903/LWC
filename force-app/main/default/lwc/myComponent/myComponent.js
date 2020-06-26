import { LightningElement, api, track } from 'lwc';
import Id from '@salesforce/user/Id'
export default class MyComponent extends LightningElement {
    @api name = 'Sukhpartap Singh';
    @track title = 'Salesforce Consultant';
    email = 'email@email.com'
    phone = '1234556';
    userId = Id;
    handleClick() {
        //alert('I m inside JS FILE')''
        this.name = 'Sukh Singh'
        console.log(this.userId);
    }
}