public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<sObject> getContactList(string name){
        String key ='%'+name+'%';
        String query = 'Select Id, LastName,Email,Phone from Contact Where Name LIKE :key';
        return Database.query(query);
    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> getAccountList(string name){
        String key ='%'+name+'%';
        String query = 'Select Id, Name,Industry,BillingStreet from Account Where Name LIKE :key';
        return Database.query(query);
    }
}
