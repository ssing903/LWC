public with sharing class AppliedActivites {

    @AuraEnabled(cacheable = true)
    public static List<EpicContact>  GetActivitesByAccountId() {
        HttpRequest request = new HttpRequest();
        request.setEndpoint('http://35.226.151.97/api/Accounts/66617/Contacts');
        request.setMethod('GET');
        request.setHeader('X-EPIC-DB', 'DE21_APPCRM1_DEMO');
        request.setHeader('X-EPIC-AUTH-KEY', 'P2QWjKVsVKJwnvw3FIRF4KhT1EAcqRwJMhfb9NgU58c=');
        request.setHeader('X-EPIC-SDK-ENDPOINT', 'https://de21sdk.appliedonline.net/epicsdk/epicsdk.svc/v2019_01');
        request.setHeader('X-API-VERSION', '2.0');
        HttpResponse response = new Http().send(request);
        String responseBody = response.getBody();
        List<EpicContact> lst_Contact = (List<EpicContact>)JSON.deserialize(responseBody, List<EpicContact>.class);
        return lst_Contact;
    }

    public class EpicContact {
        @AuraEnabled
        public Boolean AccountAddressFlag;
        @AuraEnabled
        public Integer AccountID;
        @AuraEnabled
        public String AccountType;
        @AuraEnabled
        public Address Address;
        public String AddressDescription;
        public Boolean BillingFlag;
        public BusinessIndividualOption BusinessIndividualOption;
        public BusinessInfo BusinessInfo;
        public String BusinessName;
        public BusinessIndividualOption CategoryOption;
        public String Comments;
        @AuraEnabled
        public Integer ContactID;
        public ContactInfo ContactInfo;
        public String Description;
        public DriverValue DriverValue;
        public EmployerValue EmployerValue;
        @AuraEnabled
        public String FirstName;
        public String FormalHeading;
        public String InFormalHeading;
        @AuraEnabled
        public String LastName;
        public Boolean MailingFlag;
        public Boolean MainBusinessContact;
        @AuraEnabled
        public String MiddleName;
        public PersonalClassificationsValue PersonalClassificationsValue;
        public String Prefix;
        public Boolean PrimaryContact;
        public String SiteID;
        public String Suffix;
        public String Timestamp;

    }

    public class BusinessInfo {
        public String BusinessTypeCode;
        public String BusinessTypeOtherDescription;
        public String CreditBureauIDNumber;
        public String CreditBureauNameCode;
        public String CreditBureauOtherDescription;
        public String DUNS;
        public String DateBusinessStarted;
        public String ELTOEmployerReferenceNumber;
        public String ELTOEmployerTypeCode;
        public String ELTOExemptStatusCode;
        public String NAICS;
        public String NatureOfBusinessCode;
        public String NatureOfBusinessOtherDescription;
        public String NumberManagersMembers;
        public String SIC;
    }


    public class DriverValue {
        public String AccidentPreventionCourseDate;
        public String CommercialExperienceBeganDate;
        public String DateLicensed;
        public String DateLicensedMA;
        public String DriverTraining;
        public String DriverType;
        public String DriversLicenseNumber;
        public String GoodStudent;
        public String StateLicensed;
        public Boolean StudentOver100MilesFlag;
    }


    public class ContactInfo {
        public String BillingContactMethod;
        public String ContactVia;
        public String Email1;
        public String Email1Description;
        public String Email2;
        public String Email2Description;
        public String Language;
        public String MarketingContactMethod;
        public String Phone1CallPermission;
        public String Phone1Description;
        public String Phone1Extension;
        public String Phone1Number;
        public String Phone1NumberType;
        public String Phone2CallPermission;
        public String Phone2Description;
        public String Phone2Extension;
        public String Phone2Number;
        public String Phone2NumberType;
        public String Phone3CallPermission;
        public String Phone3Description;
        public String Phone3Extension;
        public String Phone3Number;
        public String Phone3NumberType;
        public String Phone4CallPermission;
        public String Phone4Description;
        public String Phone4Extension;
        public String Phone4Number;
        public String Phone4NumberType;
        public String Phone5CallPermission;
        public String Phone5Description;
        public String Phone5Extension;
        public String Phone5Number;
        public String Phone5NumberType;
        public String ServicingContactMethod;
        public String Website;
        public String WebsiteDescription;
        public String Phone1CountryCode;
        public String Phone2CountryCode;
        public String Phone3CountryCode;
        public String Phone4CountryCode;
        public String Phone5CountryCode;
        public Boolean MarketingOptInEmail;
        public Boolean MarketingOptInFax;
        public Boolean MarketingOptInMail;
        public Boolean MarketingOptInPhone;
        public Boolean MarketingOptInSMS;
        public Boolean Phone1SMS;
        public Boolean Phone2SMS;
        public Boolean Phone3SMS;
        public Boolean Phone4SMS;
        public Boolean Phone5SMS;
        public Boolean MarketingOptInThirdParty;
    }

    public class DriverValue_Z {
        public String AccidentPreventionCourseDate;
        public String CommercialExperienceBeganDate;
        public String DateLicensed;
        public String DateLicensedMA;
        public String DriverTraining;
        public String DriverType;
        public String DriversLicenseNumber;
        public String GoodStudent;
        public String StateLicensed;
        public Boolean StudentOver100MilesFlag;
    }

    public class Address {
        public String City;
        public String CountryCode;
        public String County;
        public String StateOrProvinceCode;
        public String Street1;
        public String Street2;
        public String Street3;
        public String ZipOrPostalCode;
    }

    public class EmployerValue {
        public String DateHired;
        public String Department;
        public Address EmployerAddress;
        public String EmployerAddressDescription;
        public Boolean EmployerAddressFlag;
        public String EmployerName;
        public String Occupation;
        public String Title;
        public String YearsWithPriorEmployer;
    }

    public class BusinessIndividualOption {
        public String OptionName;
        public Integer Value;
    }

    public class PersonalClassificationsValue_Z {
        public String DateOfBirth;
        public String Gender;
        public String MaritalStatus;
        public String SocialSecurityNumber;
        public String SocialInsuranceNumber;
        public String NationalInsuranceNumber;
    }

    public class PersonalClassificationsValue {
        public String DateOfBirth;
        public String Gender;
        public String MaritalStatus;
        public String SocialSecurityNumber;
        public String SocialInsuranceNumber;
        public String NationalInsuranceNumber;
    }

    public class EmployerValue_Z {
        public String DateHired;
        public String Department;
        public Address EmployerAddress;
        public String EmployerAddressDescription;
        public Boolean EmployerAddressFlag;
        public String EmployerName;
        public String Occupation;
        public String Title;
        public String YearsWithPriorEmployer;
    }

    public class BusinessInfo_Z {
        public String BusinessTypeCode;
        public String BusinessTypeOtherDescription;
        public String CreditBureauIDNumber;
        public String CreditBureauNameCode;
        public String CreditBureauOtherDescription;
        public String DUNS;
        public String DateBusinessStarted;
        public String ELTOEmployerReferenceNumber;
        public String ELTOEmployerTypeCode;
        public String ELTOExemptStatusCode;
        public String NAICS;
        public String NatureOfBusinessCode;
        public String NatureOfBusinessOtherDescription;
        public String NumberManagersMembers;
        public String SIC;
    }    
}