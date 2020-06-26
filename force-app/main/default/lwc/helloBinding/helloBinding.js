import { LightningElement,track, wire } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
import GetContactList from '@salesforce/apex/ContactController.fetchContact'
export default class HelloBinding extends LightningElement {
    //greeting = '';
    @track greeting = '';
    @track name = NAME;
    @track objName = sObjectName;

    @wire(GetContactList) lst_Contact
    contacts = [
        {
            Id :1,
            Name : 'Pankaj Jangra',
            Title : 'CRM Consultant'
        },
        {
            Id :2,
            Name : 'Sukh',
            Title : 'CRM Consultant'
        },
    ]
    handleChange(event) {
        this.greeting = event.detail.value
        console.log(JSON.stringify(this.lst_Contact));
    }
}