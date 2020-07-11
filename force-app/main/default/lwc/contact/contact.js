import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
import getAccountList from '@salesforce/apex/ContactController.getAccountList'
export default class Contact extends LightningElement {

    @track lst_Contact = [];
    @track lst_Account = [];
    @track searchKey ;
    @track selectedAccount;

    @wire(getContactList,{
        name : '$searchKey'
    })
    getContactList({error,data}) {
        if(data) {
            this.lst_Contact = data;
        }
        if(error) {
            console.log(error);
        }
    }
    handleChange(event) {
        //event.preventDefault();
        this.searchKey = event.target.value;
    }

    findAccounts(event) {
        getAccountList({
            name : this.searchKey
        }).then(result => {
            this.lst_Account = result;
        }).catch(error =>  {
            console.log(error);
        })
    }

    handleSelectRecord(event) {
        const recordId = event.detail;
        this.selectedAccount = this.lst_Account.find(account => account.Id === recordId);
        
    }

}

/*
    @wire(getContactList,{name : '$searchKey})lstContact
*/