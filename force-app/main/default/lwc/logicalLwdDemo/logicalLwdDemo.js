import { LightningElement, track, wire } from 'lwc';
import mapDemo from '@salesforce/apex/UtilityClass.mapDemo'
import testName from '@salesforce/apex/UtilityClass.testName'

export default class LogicalLwdDemo extends LightningElement {
    @track greeting = 'Hello World'
    @track message = 'Message'
    @track name
    @track map
    contacts = [
        {
            Id :1,
            Name : 'Pankaj',
            Title : 'CRM Consultant'
        },
        {
            Id :2,
            Name : 'Sukh',
            Title : 'CRM Consultant'
        },
    ]

    @wire(mapDemo) records;
    @wire(testName)
    wiredData({error,data}) {
        if (data) {
            this.name = data;
        }
        if(error) {
            console.log(error);
        }
    }

    handleClick() {
        mapDemo().then(result => {
            console.log(result);
            const options = [];
            for (let key in result) {
                if(key) {
                    options.push({
                        key : key,
                        value : result[key]
                    })
                }
            }
            console.log(options);
            this.map = options;
        }).catch(error => {
            console.log(error);
        })
    }
    /* eslint-disable no-console */
    //console.log(records);
}