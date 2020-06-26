import { LightningElement,api,wire,track } from 'lwc';

// let data = [
//     {
//         id : 1,
//         Name : 'Sukh',
//         Stage : 'Prospect',
//         Industry : 'IT',
//         Contact : '123243'
//     },
//     {
//         id : 2,
//         Name : 'Pankaj',
//         Stage : 'Contrast',
//         Industry : 'Health',
//         Contact : '12323'
//     }
// ]


// const actions = [
//     {'label' : 'Edit',name : 'Edit'},
//     {'label' : 'Delete',name : 'Delete'}
// ]

// const columns = [
//     { label: 'Name', fieldName: 'Name' },
//     { label: 'Stage', fieldName: 'Stage' },
//     { label: 'Industry', fieldName: 'Industry' },
//     { label: 'Contact', fieldName: 'Contact' },
//     {
//         type : 'action',
//         typeAttributes : {rowActions : actions}
//     }
// ];

export default class CreateAccount extends LightningElement {
    // @track displayAccountForm = false;
    // @track columns = columns;
    // @track data = data;
    // @track account = new Account();

  
    // handleClick(event) {
    //     let buttonName = event.target.name;
    //     if (buttonName == 'Submit') {
    //         this.createAccount();
    //         this.displayAccountForm = false;    
    //     }
    //     else {
    //         this.displayAccountForm = true;    
    //     }

    // }

    // trackAccountValue(event) {
    //     let field = event.target.name;
    //     if (field in this.account) {
    //         this.account[field]  = event.target.value;
    //     }
    // }

    // createAccount() {
    //     if(!this.account.id) {
    //         let date = new Date().toUTCString();
    //         this.account.id = date;
    //         this.data.push(this.account)
    //         this.account = new Account();
    //     }
    //     else {
    //         this.data.some((updateAccount) => {
    //             if (updateAccount.id == this.account.id) {
    //                 updateAccount.Name = this.account.Name;
    //                 updateAccount.Industry = this.account.Industry;
    //                 updateAccount.Contact = this.account.Contact;
    //                 updateAccount.Stage = this.account.Stage;
    //             }
    //         })
    //         this.account = new Account();
    //     }
    // }
    

    // handleRowAction(event) {
    //     let actionName = event.detail.action.name;
    //     let row = event.detail.row;
    //     if (actionName == 'Edit') {
    //         this.account = row;
    //         this.displayAccountForm = true;
    //     }
    //     else {
    //         this.deleteRow(row);
    //     }   
    // }    

    // deleteRow(row) {
    //     const { id } = row;
    //     const index = this.findRowIndexById(id);
        
    //     if (index !== -1) {
    //         this.data = this.data
    //             .slice(0, index)
    //             .concat(this.data.slice(index + 1));
    //     }
    // }

    // findRowIndexById(id) {
    //     let ret = -1;
    //     this.data.some((row, index) => {
    //         if (row.id === id) {
    //             ret = index;
    //             return true;
    //         }
    //         return false;
    //     });
    //     return ret;
    // }

    @api account;
}



