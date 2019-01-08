/**
 * Created by Serhii Rudkov on 08.01.2019.
 */
({
    onBoatSelected: function (component, event, helper) {
        var boat = event.getParam("boat");
        var boatId = boat.Id;
        // component.set("v.boat",boat);
        component.set("v.id",boatId);
        component.find("service").reloadRecord();
    },
    onRecordUpdated: function (component, event, helper) {
        let eventParams = event.getParams();
        let changeType = event.getParams().changeType;
        if (changeType === "CHANGED") {
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "CHANGED",
                "message": "The record was CHANGED."
            });
            resultsToast.fire();
            component.find("service").reloadRecord();
        } else if (changeType === "LOADED") {
            console.log("record is loaded successfully.");
        } else if (changeType === "REMOVED") {
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "The TRACK was deleted."
            });
            resultsToast.fire();
        } else if (changeType === "ERROR") {
            console.log('Error: ' + component.get("v.error"));
            console.log('Error track: ' + JSON.stringify(component.get("v.error")));
        }
    },
    onBoatReviewAdded: function (component, event, helper) {
        component.set("v.selectedTabId","reviews");
        var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
    onAddReviews: function (component, event, helper) {
        // component.find("addReviews").newBoatReview();
    },
})