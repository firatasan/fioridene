sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageBox",
    'sap/m/MessageToast',
],


    function (Controller, BaseController, MessageBox, MessageToast) {
        "use strict";

        return BaseController.extend("ehliyet.controller.View2", {

            onInit: function(){
                var myUserType = sessionStorage.getItem('myKeyString');
                sap.ui.getCore().byId(this.createId("text7")).setText(myUserType + "   Merhaba lütfen seciminizi zapiniz");
                setTimeout(this.onBaslangic, 1000);

                if (myUserType == "user") {
                    var vl = this.getView().byId("button3");
                    vl.setVisible(false);

                    var v2 = this.getView().byId("button4");
                    v2.setVisible(false);

                    var v3 = this.getView().byId("button5");
                    v3.setVisible(false);
                    
                }
              }, 

              onBaslangic: function(){

                var myUserType = sessionStorage.getItem('myKeyString');
                MessageBox.success( myUserType + "  olarak giris yaptiniz");
                
              },

            onNavToCreate : function () {
                debugger;
                // display the "notFound" target without changing the hash
            this.getRouter().getTargets().display("ehliyetYap", {
            fromTarget : "TargetView1"
            });
            } ,

            onNavToList : function () {

                var myUserType = sessionStorage.getItem('myKeyString');

                if (myUserType == "admin") {

                    this.getRouter().getTargets().display("kayitlariListele", {
                        fromTarget : "TargetView1"
                        });
                    
                } else {
                    MessageBox.warning("Bu islemi gerceklestirebilmeniz icin yönetici olmalisiniz");
                   
                }

            },


        onPress: function (evt) {


            var PageController = Controller.extend("sap.m.sample.Button.Page"); 
                    MessageToast.show(evt.getSource().getId() + " Pressed");
                    return PageController;
                },

        onNavToDeneme: function (evt) {
            var myUserType = sessionStorage.getItem('myKeyString');
            if (myUserType == "admin"){
                this.getRouter().getTargets().display("deneme");
            }else {
                MessageBox.warning("Bu islemi gerceklestirebilmeniz icin yönetici olmalisiniz");
               
            }

        },

        onNavToDeneme2: function (evt) {
            var myUserType = sessionStorage.getItem('myKeyString');
            if (myUserType == "admin"){
                this.getRouter().getTargets().display("deneme2");
            }else {
                MessageBox.warning("Bu islemi gerceklestirebilmeniz icin yönetici olmalisiniz");
               
            }
        
        },

        onNavToDeneme3: function (evt) {
            var myUserType = sessionStorage.getItem('myKeyString');
            if (myUserType == "admin"){
                this.getRouter().getTargets().display("deneme3");
            }else {
                MessageBox.warning("Bu islemi gerceklestirebilmeniz icin yönetici olmalisiniz");
               
            }
        
        },


    });
    




         

});
