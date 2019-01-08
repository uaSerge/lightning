/**
 * Created by Serhii Rudkov on 07.01.2019.
 */
({
    onBoatClick: function (component, event, helper) {
        var selectEvent = component.getEvent("boatSelect");
        var boatId = component.get("v.boat.Id");
        selectEvent.setParams({
            "boatId":boatId
        });
        selectEvent.fire();

        var selectedEvent = $A.get("e.c:BoatSelected");
        var boat = component.get("v.boat");
        selectedEvent.setParams({
            "boat":boat
        });
        selectedEvent.fire();

        var mapEvent = $A.get("e.c:PlotMapMarker");
        mapEvent.setParams({
            "sObjectId":component.get("v.boat.Id"),
            "lat":component.get("v.boat.Geolocation__latitude__s"),
            "long":component.get("v.boat.Geolocation__longitude__s"),
            "label":component.get("v.boat.Name")
        });
        //we set the params to the Map
        mapEvent.fire();
    },
})