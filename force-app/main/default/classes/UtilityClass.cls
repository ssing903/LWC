public with sharing class UtilityClass {
    
    @AuraEnabled
    public static Map<String,Integer> mapDemo(){
        Map<String,Integer> testMap = new Map<String,Integer>();
        testMap.put('Sukh Singh',1);
        testMap.put('Pankaj Singh',2);
        testMap.put('Prince Singh',3);
        testMap.put('Garav Singh',4);
        return testMap;
    }

    @AuraEnabled(cacheable=true)
    public static string testName(){
        return 'test String';
    }
}
