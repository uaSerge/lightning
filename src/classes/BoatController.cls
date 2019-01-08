/**
 * Created by Serhii Rudkov on 07.01.2019.
 */

public with sharing class BoatController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Name FROM BoatType__c];
    }

}