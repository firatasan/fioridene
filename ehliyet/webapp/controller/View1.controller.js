sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageBox",
    'sap/m/MessageToast',
],


    function (Controller, BaseController, MessageBox, MessageToast) {
        "use strict";

        return BaseController.extend("ehliyet.controller.View1", {

        onLogin: function (evt) {

            var girisIsmi = sap.ui.getCore().byId(this.createId("userName")).getValue();
            var girisPass = sap.ui.getCore().byId(this.createId("password")).getValue();

            //this.getView().getModel("TempDataModel").setProperty("/",{ "FirstName":fname} );
            this.getView().getModel("TempDataModel").setProperty("/",{ "KullaniciAdi":girisIsmi} );
            this.getView().getModel("TempDataModel").setProperty("/",{ "Sifre":girisPass} );



            if ((girisIsmi == "admin" & girisPass == "admin") || (girisIsmi == "user" & girisPass == "user")) {

                this.getRouter().getTargets().display("TargetView1");
                sessionStorage.setItem("myKeyString", girisIsmi);

            }
            if (girisIsmi == "" || girisPass == "") {

                MessageBox.warning("Kullanici adi veya Sifresi bos olamaz!!!");

            }
            if ((girisIsmi == "admin" & girisPass != "admin") || (girisIsmi == "user" & girisPass != "user")) {

                MessageBox.warning("Gecersiz Kullanici adi veya Sifre!!!");
               }

                },

                // Default button press eventi 
                onPress: function (evt) {
        
                    var PageController = Controller.extend("sap.m.sample.Button.Page"); 
                            MessageToast.show(evt.getSource().getId() + " buttonuna basildi");
                            return PageController;
                    },


         });
    


    });
