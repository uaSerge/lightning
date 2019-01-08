/**
 * Created by Serhii Rudkov on 07.01.2019.
 */
({
    doInit: function (component, event, helper) {
        var createRecord = $A.get("e.force:createRecord");
        if (createRecord) {
            component.set("v.IsCreateRecord", true);
        }
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set("v.boatTypes", response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
    },
    newBoat: function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        //$A.get This sintax is to get an instance of an application event
        var selectedBoatTypeName = component.get("v.boatTypeName");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c"
        });
        if (selectedBoatTypeId) {
            createRecordEvent.setParams({
                "defaultFieldValues": {'BoatType__c': selectedBoatTypeName}
            });
        }
        createRecordEvent.fire();
    },
    onFormSubmit: function (component, event, helper) {
        var FormSubmit = component.getEvent("FormSubmit");
        var boatTypeId = component.get("v.boatTypeId");
        FormSubmit.setParams({
            "formData": boatTypeId
        });
        console.log("boatTypeId " + boatTypeId);
        FormSubmit.fire();
    },
})