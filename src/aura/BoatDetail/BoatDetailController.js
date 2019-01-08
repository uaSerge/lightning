/**
 * Created by Serhii Rudkov on 08.01.2019.
 */
({
    onFullDetails: function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    },
    doInit: function (component, event, helper) {
        if($A.get("e.force:navigateToSObject")){
            component.set("v.displayButton",true);
        }
    },
})