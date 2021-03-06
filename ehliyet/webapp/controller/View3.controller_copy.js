sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
	"sap/m/UploadCollectionParameter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"




],
 

    function (Controller, BaseController, MessageBox, MessageToast, UploadCollectionParameter, JSONModel, Device) {
        "use strict";

        return BaseController.extend("ehliyet.controller.View1", {

 
            onInit: function() {
                this.getView().setModel(new JSONModel(Device), "device");
                var gelentc = sessionStorage.getItem('myKeyString2');
            },
    
            onChange: function(oEvent) {
                var oUploadCollection = oEvent.getSource();
                // Header Token
                var oCustomerHeaderToken = new UploadCollectionParameter({
                    name: "x-csrf-token",
                    value: "securityTokenFromModel"
                });
                oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
                MessageToast.show("Event change triggered");
            },
    
            // onFileDeleted: function(oEvent) {
            //     MessageToast.show("Event fileDeleted triggered");
            // },
    
            // onFilenameLengthExceed: function(oEvent) {
            //     MessageToast.show("Event filenameLengthExceed triggered");
            // },
    
            // onFileSizeExceed: function(oEvent) {
            //     MessageToast.show("Event fileSizeExceed triggered");
            // },
    
            // onTypeMissmatch: function(oEvent) {
            //     MessageToast.show("Event typeMissmatch triggered");
            // },
    
            onStartUpload: function(oEvent) {
                var oUploadCollection = this.byId("UploadCollection");
                var oTextArea = this.byId("TextArea");
                var cFiles = oUploadCollection.getItems().length;
                var uploadInfo = cFiles + " file(s)";
    
                if (cFiles > 0) {
                    oUploadCollection.upload();
    
                    if (oTextArea.getValue().length === 0) {
                        uploadInfo = uploadInfo + " without notes";
                    } else {
                        uploadInfo = uploadInfo + " with notes";
                    }
    

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


                var OdataUrl = "/EhliyetSet" + 
                    this.getOwnerComponent().getModel().                
                    create("/EhliyetSet", postData, null, function (response) {
                    MessageToast.show("User Created Successfully with number  " + oCust1);
                    var mylocation = location; mylocation.reload();
                    }, function (Error) {
                    MessageToast.show("Customer Creation Failed  " + oCust1);
                    });






                    MessageToast.show("Method Upload is called (" + uploadInfo + ")");
                    MessageBox.information("Uploaded " + uploadInfo);
                    oTextArea.setValue("");
                }
            },
    
            onBeforeUploadStarts: function(oEvent) {
                // Header Slug
                var oCustomerHeaderSlug = new UploadCollectionParameter({
                    name: "slug",
                    value: oEvent.getParameter("fileName")
                });
                oEvent.getParameters().addHeaderParameter(oCustomerHeaderSlug);
                setTimeout(function() {
                    MessageToast.show("Event beforeUploadStarts triggered");
                }, 4000);
            },
    
            onUploadComplete: function(oEvent) {
                var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
                setTimeout(function() {
                    var oUploadCollection = this.byId("UploadCollection");
    
                    for (var i = 0; i < oUploadCollection.getItems().length; i++) {
                        if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
                            oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
                            break;
                        }
                    }
    
                    // delay the success message in order to see other messages before
                    MessageToast.show("Event uploadComplete triggered");
                }.bind(this), 8000);
            },
    
            onSelectChange: function(oEvent) {
                var oUploadCollection = this.byId("UploadCollection");
                oUploadCollection.setShowSeparators(oEvent.getParameters().selectedItem.getProperty("key"));
            }
        });
    




         

});
