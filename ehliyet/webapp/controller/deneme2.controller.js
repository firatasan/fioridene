sap.ui.define([
    "./BaseController",
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/m/library'


],


    function (BaseController, Fragment, Controller, mLibrary) {
        "use strict";

        return BaseController.extend("ehliyet.controller.deneme2", {
            _getDialog : function () {
                var oView = this.getView();
                oView.setModel(this.getOwnerComponent().getModel('ZFRT_MATNR_VALUE_HELP_SRV'));
                debugger;
    

                if (!this._pDialog) {

                    debugger;

                    this._pDialog = Fragment.load({
                        id: oView.getId(),
                        name: "ehliyet.view.Dialog2",
                        
                        
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
                return this._pDialog;
            },
    
            handleOpenDialogSearchContains: function () {
                this._getDialog().then(function(oDialog) {
                oDialog
                    .setFilterSearchCallback(null)
                    .setFilterSearchOperator(mLibrary.StringFilterOperator.Contains)
                    .open();
                });
            },
    
            handleOpenDialogCustomSearch: function() {
                this._getDialog().then(function(oDialog) {
                    oDialog
                        .setFilterSearchCallback(this.caseSensitiveStringContains)
                        .open();
                }.bind(this));
            },
    
    
            handleOpenDialogSearchWordsStartWith: function() {
                this._getDialog().then(function(oDialog) {
                    oDialog
                        .setFilterSearchCallback(null)
                        .setFilterSearchOperator(mLibrary.StringFilterOperator.AnyWordStartsWith)
                        .open();
                });
            },
    
            caseSensitiveStringContains: function (sQuery, sItemText) {
                return sItemText.indexOf(sQuery) > -1;
            }
        });
    
    });