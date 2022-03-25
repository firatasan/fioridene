sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",


],


    function (Controller, BaseController, MessageToast, MessageBox, JSONModel, Fragment) {
        "use strict";

        return BaseController.extend("ehliyet.controller.edit", {
             
            onInit: function () {
                var oRouter = this.getRouter();
                oRouter.getRoute("edit").attachMatched(this._onRouteMatched, this);

                debugger;  
            },

            onNavPhoto: function () {

                var gelenTc = this.getView().byId("_IDGenText1").getText();
                sessionStorage.setItem("myKeyString2", gelenTc);
                
                this.getRouter().getTargets().display("TargetView2");


            },

            _onRouteMatched : function (oEvent) {
                var oArgs, oView;
    
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                oView.bindElement({
                    path : "/EhliyetSet('" + oArgs.Tckimlikno + "')",
                    events : {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function (oEvent) {
                            oView.setBusy(true);
                        },
                        dataReceived: function (oEvent) {
                            oView.setBusy(false);
                        }
                    }
                });
                debugger;

            },
    
            _onBindingChange : function (oEvent) {
                // No data for the binding
                if (!this.getView().getBindingContext()) {
/*                     this.getRouter().getTargets().display("TargetView1"); */
                    debugger;
                }
            },


            createNew: function () {

                    var oJSONModel = new JSONModel();
                    this.getView().setModel(oJSONModel, "jsonmodel");
                    var sUrl = "/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/";
                    var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                    oModel.read("/EhlieytSet", {
                    success: function (data) {
                    oJSONModel.setData({
                    EhliyetSet: data.results    
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
                    MessageToast.show("User Created Successfully with number  " + oCust1);
                    var mylocation = location; mylocation.reload();
                    }, function (Error) {
                    MessageToast.show("Customer Creation Failed  " + oCust1);
                    });
                
                    },




                    onOpenDialog: function () {
                        var oView = this.getView();


                        // create dialog lazily
                        if (!this.byId("openDialog")) {
                         // load asynchronous XML fragment
                         Fragment.load({
                          id: oView.getId(),
                          name: "ehliyet.view.Dialog",
                          controller: this
                        }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                            oView.addDependent(oDialog);
                            oDialog.open();
                           });
                         } else {
                             this.byId("openDialog").open();
                              }
                            },
                         
                    closeDialog: function () {
                            this.byId("openDialog").close();
                            },

                    updateDialog: function () {

                        debugger;
                        var oJSONModel = new JSONModel();
                        this.getView().setModel(oJSONModel, "jsonmodel");
                        var sUrl = "/sap/opu/odata/sap/ZFRT_UI_EHLIYET_SRV/";
                        var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                        oModel.read("/EhliyetSet", {
                        success: function (data) {
                        oJSONModel.setData({
                        EhliyetSet: data.results    
                        /* scarrEntitySet: data.results */
                        });
                        }
                        });
    
                        var oCust1 = this.getView().byId("_IDGenInput1").getValue();
                        var oCust2 = this.getView().byId("_IDGenInput3").getValue();
                        var oCust3 = this.getView().byId("_IDGenInput2").getValue();
                        var oCust4 = this.getView().byId("_IDGenDatePicker1").getValue();
                        var oCust5 = this.getView().byId("_IDGenInput4").getValue();
                        var oCust6 = this.getView().byId("_IDGenInput6").getValue();
                        var oCust7 = this.getView().byId("_IDGenInput7").getValue();
                        /* var oCust8 = this.getView().byId("box0").getValue(); */

                        var radioButtonText = this.getView().byId("box0").getValue();;
                        var oCust8 = radioButtonText.substr(0,1);



                        var oCust9 = this.getView().byId("box1").getValue();
                        var oCust10 = this.getView().byId("_IDGenInput5").getValue();
                                        
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
                        postData.Adress = oCust10;
                        this.getOwnerComponent().getModel().                    
                        update("/EhliyetSet('" + oCust1 + "')", postData, null, function (postData, response) {
                        MessageToast.show("Customer update Successfully with number  " + oCust1);
                        var mylocation = location; mylocation.reload();

                        debugger;

                        }, function (Error) {
                        MessageToast.show("Customer update Failed  " + oCust1);
                                debugger;
                    
                    });

                    MessageToast.show(oCust1 + "   TC Kimlik Numaralı kişinin bilgileri güncellendi");
                    /* this.byId("openDialog").close();  ikinci yöntem aşağıda*/
                    this.closeDialog();
                    debugger;


                }

    });
});