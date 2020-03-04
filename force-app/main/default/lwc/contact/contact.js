import { LightningElement,track,wire } from 'lwc';

import createContactRecord from '@salesforce/apex/ContactController.createContactRecord';
import updateContactRecord from '@salesforce/apex/ContactController.updateContactRecord';
import myContact from "@salesforce/apex/ContactController.fetchContact";

export default class Contact extends LightningElement {

@track recordId;
contactRecord;


// fetches a contact record from Apex
@wire (myContact)
    fetchedContact({error, data}){
        if(data){

            // this is where I save the fetched contact which will be updated later
            console.log(JSON.stringify(data));
            this.contactRecord = JSON.stringify(data);
           
        }
    }


// my create record JS function, where I construct a SObject and am able to 
// successfully create a record
createRecord() {

    // created a JSON representation of the Contact record, 
    // same as we would do in Lightning Aura Components

    let cont = { 'sobjectType': 'Contact' };
    cont.FirstName = 'Jayant';
    cont.LastName = 'From LWC';

    createContactRecord({newRecord: cont})
        .then(result => {
            this.recordId = result;
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            this.error = error;
        });
}


// my update record JS function, where I manipulate the JSON 
// and set some values to be able to successfully update the record
updateRecord() {
    let cont = JSON.parse(this.contactRecord);

    // update the fields those are required to be updated
    cont.LastName = '-LWC1';

    updateContactRecord({recordForUpdate: cont})
        .then(result => {
            this.wiredContact = result;
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            this.error = error;
        });
}
}