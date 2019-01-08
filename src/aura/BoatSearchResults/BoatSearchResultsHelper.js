/**
 * Created by Serhii Rudkov on 07.01.2019.
 */
({
    onSearch: function (component,boatTypeId) {
        var action = component.get("c.getBoats");
        action.setParams({'boatTypeId':boatTypeId});
        // i get the boats filtered
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state==='SUCCESS'){
                component.set("v.boats", response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
    },
})