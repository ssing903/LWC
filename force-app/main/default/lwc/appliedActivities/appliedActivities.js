import { LightningElement, wire } from 'lwc';
import EpicContact from '@salesforce/apex/AppliedActivites.GetActivitesByAccountId';
import {loadStyle,loadScript} from "lightning/platformResourceLoader";
import Datatable from '@salesforce/resourceUrl/DataTable';
export default class AppliedActivities extends LightningElement {
    lst_Contact = [];
    resourceLoad = false;

    @wire(EpicContact)
    wiredContacts({ error, data }) {
        if (data) {
            this.lst_Contact = data;
            
        } else if (error) {
            console.log(error);
        }
    }

    connectedCallback() {
        
    }

    renderedCallback() {

        if (this.resourceLoad) {
            return;
        }
        this.resourceLoad = true;
        loadScript(this,Datatable+'/DataTables-1.10.21/media/js/jquery.js').then(e => {
            loadStyle(this,Datatable + '/DataTables-1.10.21/media/css/jquery.dataTables.min.css');
            loadScript(this,Datatable+'/DataTables-1.10.21/media/js/jquery.dataTables.js')
        }).then(() => {
            let test = this.template.querySelector('table.display');
            $(document).ready( function () {
                test.DataTable();
            } );
           
        }).catch(error => {
            console.log(error);
        });
    }
}