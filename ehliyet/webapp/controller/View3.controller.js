sap.ui.define([
    "./BaseController",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/UploadCollectionParameter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/ODataModel",
    "sap/m/Button",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Dialog"

],

//                 

//                 /sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/EhliyetSet('11111111111')/Photo
//                 /sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/EhliyetDosyaSet('66666666666')/$value

    function (Device, BaseController, MessageToast, MessageBox,
         UploadCollectionParameter, JSONModel, Controller, Filter, FilterOperator, ODataModel, Button, Dialog, List, StandardListItem
         ) {
        "use strict";

        var name;
        var mandt;
    
        var oModel = new sap.ui.model.odata.ODataModel("https://abides7.esr-soft.com:8555/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/");

        return BaseController.extend("ehliyet.controller.View3", {

            onInit: function() {
                this.getView().setModel(new JSONModel(Device), "device");
                
            },


            handleUploadComplete: function() {

                sap.m.MessageToast.show("File Uploaded");
                // var oFilerefresh = this.getView().byId("itemlist");
                // oFilerefresh.getModel("Data").refresh(true);
                // sap.m.MessageToast.show("File refreshed");
    
            },
            handleUploadPress: function() {


                var gelentc = sessionStorage.getItem('myKeyString2');
                var uploadUrl="https://abides7.esr-soft.com:8555/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/EhliyetSet('"+gelentc+"')/Photo";
                var downloadUrl="https://abides7.esr-soft.com:8555/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/EhliyetDosyaSet('"+gelentc+"')/$value";
                this.getView().getModel("TempDataModel").setProperty("/",{ "uploadUrl":uploadUrl} );
                this.getView().getModel("TempDataModel").setProperty("/",{ "downloadUrl":downloadUrl} );


                var oFileUploader = this.getView().byId("fileUploader");
                if (oFileUploader.getValue() === "") {
                    MessageToast.show("Please Choose any File");
                }
                oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
                    name: "SLUG",
                    value: oFileUploader.getValue()
                }));
    
                oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
                    name: "x-csrf-token",
                    value: oModel.getSecurityToken()
                }));
                oFileUploader.setSendXHR(true);
    
                oFileUploader.upload();
    

    
            },




            // uploadBasla: function(oEvent) {
            //     MessageToast.show("START START START");

            //     var gelentc = sessionStorage.getItem('myKeyString2');
            //     var uploadUrl="https://abides7.esr-soft.com:8555/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/EhliyetSet('"+gelentc+"')/Photo";

            //     var oUploadDialog = new sap.ui.commons.Dialog();
            //     oUploadDialog.setTitle("Upload photo");
            //     sap.ui.getCore().getModel().refreshSecurityToken();
            //     // prepare the FileUploader control
            //     var oFileUploader = new sap.ui.unified.FileUploader({
            //         uploadUrl : uploadUrl,
            //         name: "simpleUploader",
            //         uploadOnChange: false,
            //         sendXHR: true,
            //         useMultipart: false,
            //         headerParameters: [
            //             new sap.ui.unified.FileUploaderParameter({name: "x-csrf-token", value: sap.ui.getCore().getModel().getHeaders()['x-csrf-token'] }),   
            //         ],
            //         uploadComplete: function (oEvent) {
            //             var sResponse = oEvent.getParameter("response");
            //             if (sResponse) {
            //                 oUploadDialog.close();
            //                 sap.ui.commons.MessageBox.show("Return Code: " + sResponse, "Response", "Response");
            //             }
            //         }
            //         });
            //         oFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter({name: "slug", value: oFileUploader.getValue() }));
            //         oFileUploader.upload();                   

            //         oUploadDialog.addContent(oFileUploader);
            //         oUploadDialog.addContent()
            //         oUploadDialog.addContent(oTriggerButton);
            //         oUploadDialog.open();


            // },

        









        });
    
});
