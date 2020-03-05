import { LightningElement,track} from 'lwc';

export default class ObjectDemo extends LightningElement {
    @track accounts = [
        {
            id : 1,
            Name : 'Randy',
            Contact : 'Stutz',
            Industry : 'Insurance',
            PhoneNumber : 12234545
        },
        {
            id : 2,
            Name : 'Lap',
            Contact : 'Ngo',
            Industry : 'Insurance',
            PhoneNumber : 12234545
        },
        {
            id : 3,
            Name : 'Tim',
            Contact : 'Reddick',
            Industry : 'Insurance',
            PhoneNumber : 12234545
        }
    ]

    actions = [
        { label: 'Edit', name: 'Edit' },
        { label: 'Delete', name: 'Delete' }
    ]
    columns = [
        {label:'Name',fieldName : 'Name'},
        {label:'Industry',fieldName : 'Industry'},
        {label:'Contact',fieldName : 'Contact'},
        {label:'Phone Number',fieldName : 'PhoneNumber', type : 'phone'},
        {type : 'action',typeAttributes : {rowActions : this.actions}}
    ];
    @track displayTable = true
    @track account = {
        id : 0,
        Name : '',
        Contact : '',
        Industry : '',
        PhoneNumber : 0
    };  

    print(event) {
        console.log(` ${this.account.Contact}`)
    }

    handleChange(event) {
        const name = event.target.name;
        if (this.account.hasOwnProperty(name)) {
            this.account[name] = event.target.value
        }
    }

    navigateToAddPage(event) {
        this.displayTable = false;
        this.account =  {
            id : 0,
            Name : '',
            Contact : '',
            Industry : '',
            PhoneNumber : 0
        };  
    }

    submit(event) {
        if (this.account.id == 0) {
            let newAccount = {
                id : this.account.length + 1,
                Name : this.account.Name,
                Contact : this.account.Contact,
                Industry : this.account.Industry,
                PhoneNumber : this.account.PhoneNumber
            }
             
            this.accounts.push(newAccount);
        }
        else if (this.account.id != 0) {
           this.accounts[this.account.id - 1].Name =  this.account.Name,
           this.accounts[this.account.id - 1].PhoneNumber = this.account.PhoneNumber,
           this.accounts[this.account.id - 1].Contact = this.account.Contact,
           this.accounts[this.account.id - 1].Industry = this.account.Industry
        }
        this.displayTable = true;
    } 

    tableRowActions(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'Edit' :
                this.EditAccount(row);
                break;
            case 'Delete' :
                this.DeleteAccount(row);
                break;
        }
    }

    EditAccount(row) {
        console.log(JSON.stringify(row));
        this.account = row;
        this.displayTable = false;
    }

    DeleteAccount(row) {
        const { id } = row;
        const index = this.FindRowIndexById(id);
        console.log(index)
        if (index !== -1) {
            this.accounts = this.accounts
                .slice(0, index)
                .concat(this.accounts.slice(index + 1));
        }
    }

    FindRowIndexById(id) {
        let ret = -1;
        this.accounts.some((row, index) => {
            if (row.id === id) {
                ret = index;
                return true;
            }
            return false;
        });
        return ret;
    }
}