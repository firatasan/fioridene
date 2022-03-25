sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",


],


    function (Controller, BaseController, MessageToast, MessageBox, JSONModel) {
        "use strict";

        return BaseController.extend("ehliyet.controller.createEhliyet", {
             



/*                 onPress: function (oEvent) {
                    this.getselval1 = oEvent.getSource().getSelectedItem().
                    getBindingContext("jsonmodel").getObject().Userid;
                    this.getView().byId("input6").setValue(this.getselval1);
                
                    this.getselval2 = oEvent.getSource().getSelectedItem().
                    getBindingContext("jsonmodel").getObject().Firstname;
                    this.getView().byId("input7").setValue(this.getselval2);


                }, */

                createNew: function () {

                    var oJSONModel = new JSONModel();
                    this.getView().setModel(oJSONModel, "jsonmodel");
                    var sUrl = "/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/";
                    var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                    oModel.read("/EhliyetSet", {
                    success: function (data) {
                    oJSONModel.setData({
                    EHLIYETSet: data.results    
                    /* scarrEntitySet: data.results */
                    });
                    }
                    });

                    var oCust1 = this.getView().byId("input6").getValue();
                    var oCust2 = this.getView().byId("input7").getValue();
                    var oCust3 = this.getView().byId("input8").getValue();
                    var oCust4 = this.getView().byId("picker1").getValue();
                    var oCust5 = this.getView().byId("input10").getValue();
                    var oCust6 = this.getView().byId("input11").getValue();
                    var oCust7 = this.getView().byId("input12").getValue();
                    /* var oCust8 = this.getView().byId("rbg2").getValue(); */
                    var radioButtonText = this.getView().byId("rbg2").getSelectedButton().getText();
                    var oCust8 = radioButtonText.substr(0,1);

                    var oCust9 = this.getView().byId("box0").getValue();
                
                
                    var postData = {};
                    postData.Tckimlikno = oCust1;
                    postData.Ad = oCust2;
                    postData.Soyad = oCust3;
                    postData.Dogumtarihi = oCust4;
                    postData.Dogumyeri = oCust5;
                    postData.Mezuniyet = oCust6;
                    postData.Meslek = oCust7;
                    postData.Ehliyetsinifi = oCust8;
                    postData.Ehliyettalep = oCust9;
                    this.getOwnerComponent().getModel().
                    create("/EhliyetSet", postData, null, function (response) {
                    MessageToast.show("Usewrr Created Successfully with number  " + oCust1);
                    var mylocation = location; mylocation.reload();
                    }, function (Error) {
                    MessageToast.show("Customer Creation Failed  " + oCust1);
                    });
                
                    },




 
    



        });
        


    });
