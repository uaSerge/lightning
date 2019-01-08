/**
 * Created by Serhii Rudkov on 08.01.2019.
 */
({
    doInit: function (component) {
        var action = component.get("c.getAll");
        action.setParams({'boatId':component.get("v.boat.Id")});
        // console.log('boatId ' + component.get("v.boat.Id"))
        // i get the boats filtered
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state==='SUCCESS'){
                console.log('v.boatReviews ' + JSON.stringify(response.getReturnValue()))
                component.set("v.boatReviews", response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
    },
})