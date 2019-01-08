/**
 * Created by Serhii Rudkov on 08.01.2019.
 */
({
    doInit: function (component,event, helper) {
       helper.doInit(component);
    },
    onUserInfoClick : function(component,event,helper){
        var userId = event.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams({
                "recordId" : userId,
            });
            navEvt.fire();
        }
    },
    onBoatChange : function(component, event, helper) {
        helper.onInit(component);
    },
    onBoatSelected : function(component, event, helper) {
        // var boat = event.getParam("boat");
        // component.set("v.boat",boat);
        helper.doInit(component);
    },
})