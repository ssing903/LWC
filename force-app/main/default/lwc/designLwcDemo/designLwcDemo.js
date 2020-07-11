import { LightningElement,api,track } from 'lwc';
import testLabel from '@salesforce/label/c.testLabel';
import testResource from '@salesforce/resourceUrl/testResource';
import userId from '@salesforce/user/Id'
import AccountObject from '@salesforce/schema/Account';
import NAME_Field from '@salesforce/schema/Account.Name';

import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import timezone from '@salesforce/i18n/timeZone';

export default class DesignLwcDemo extends LightningElement {
    @api greeting = 'Hello ';
    @api heading = 'Heading';
    @track message = 'Message';

    @api label =  {
        testLabel,
        testResource,
        userId,
        AccountObject,
        NAME_Field,
        lang,
        locale,
        currency,
        timezone
    }
}