({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    setLocation: function (component, event, helper) {
        var lat = event.getParam("lat");
        var long = event.getParam("long");
        component.set("v.location", {
            "lat": lat,
            "long":long
        });
    },
})