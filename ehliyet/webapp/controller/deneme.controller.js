sap.ui.define([
    "./BaseController",
    "sap/ui/commons/ValueHelpField",
    "sap/ui/commons/Label"


],


    function (BaseController, Label, ValueHelpField) {
        "use strict";

        return BaseController.extend("ehliyet.controller.deneme", {

            handleF4CompanyCode : function(oController) {

                var oInput = this.getView().byId("idInput");

                if(!this._oValueHelpDialog){
                    this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("idValueHelp", {
                        supportRanges:true,
                        key:"Matnr",
                        descriptionKey:"Descr",
                        ok: function(oEvent){
                            var aTokens = oEvent.getParameter("tokens");
                            oInput.setTokens(aTokens);
                            this.close();
                            debugger;
                        },
                        cancel: function(){
                            this.close();
                            debugger;
                        },

                    });
                    
                }

                // Bind the colums for table
                // Dynamically create the column:
                var oColModel = new sap.ui.model.json.JSONModel();
                oColModel.setData({
                    cols: [
                        {label: "Material Code", template: "Matnr"},
                        {label: "Material Type", template: "Mattype"},
                        {label: "Description", template: "Descr"},
                    ]
                });

                var oTable = this._oValueHelpDialog.getTable();
                oTable.setModel(oColModel, "columns");

               // var oRowModel = new sap.ui.model.json.JSONModel("ZFRT_MATNR_VALUE_HELP_SRV.MaterialCode");

                var oRowModel = new sap.ui.model.json.JSONModel("ZFRT_MATNR_VALUE_HELP_SRV");
       


                oTable.setModel(oRowModel);
                oTable.bindRows("/ZFRT_MATNR_VALUE_HELP_SRV.MaterialCode");

                this._oValueHelpDialog.setRangeKeyFields([
                    {label: "Material Code", key: "Matnr"}, {label: "Material Type", key: "Mattype"} 
                ]);

                this._oValueHelpDialog.open();

            },
       

    
        });

    
    });




        
