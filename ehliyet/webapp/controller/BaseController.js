sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",


  ], function (Controller, UIComponent, History) {
  
    "use strict";
    
        return Controller.extend("ehliyet.controller.BaseController", {


/*             onInit: function(){
                return UIComponent.getRouterFor(this);
              }, */
    

// some basic functionalities

// just this.getRouter() ...
getRouter: function() {
 
    // ... instead of
    return UIComponent.getRouterFor(this);

  },

  

  onNavBack : function () {
    // display the "notFound" target without changing the hash
this.getRouter().getTargets().display("TargetView1", {
fromTarget : "ehliyetYap"
});

} ,

onNavBack2 : function () {
    this.getRouter().getTargets().display("kayitlariListele", {
        fromTarget : "edit"
        });

} ,


onNavBack3: function () {

    this.getRouter().getTargets().display("TargetView1");
    debugger;

},






     
onListItemPressed : function(oEvent){
    var oItem, oCtx;

    oItem = oEvent.getSource();
    oCtx = oItem.getBindingContext();

    this.getRouter().navTo("edit",{
        Tckimlikno : oCtx.getProperty("Tckimlikno")
    });

},





/*   // just this.getModel() ...
  getModel: function(sName) {
 
    // ... instead of
    return this.getView().getModel(sName);

  },

  // just this.setModel() ...
  setModel: function(oModel, sName) {

    // ... instead of
    return this.getView().setModel(oModel, sName);

  },

  // just this.getResoureBundle() ... 
  getResourceBundle: function () {

    // ... instead of
    return this.getOwnerComponent().getModel("i18n").getResourceBundle();

  },

  // calculate something
  randomCalculations: function(fValue1, fValue2) {

    // do some calculations

  }, */




});

});
