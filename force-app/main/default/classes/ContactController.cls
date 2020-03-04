public with sharing class ContactController {
@AuraEnabled(cacheable=true)
public static Contact fetchContact(){
    return [SELECT Id,Name, LastName FROM Contact where Name='xxxx' LIMIT 1];
}

@AuraEnabled
public static String createContactRecord(Contact newRecord){
    insert newRecord;
    return newRecord.Id;
}

@AuraEnabled
public static String updateContactRecord(Contact recordForUpdate){
    update recordForUpdate;
    return recordForUpdate.Name;
}
}
