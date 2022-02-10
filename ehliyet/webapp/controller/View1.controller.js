sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    'sap/m/MessageToast',
],


    function (Controller, BaseController, MessageToast) {
        "use strict";

        return BaseController.extend("ehliyet.controller.View1", {
            onNavToCreate : function () {
                debugger;
                // display the "notFound" target without changing the hash
            this.getRouter().getTargets().display("ehliyetYap", {
            fromTarget : "TargetView1"
            });
            } ,

            onNavToList : function () {
                debugger;
                // display the "notFound" target without changing the hash
            this.getRouter().getTargets().display("kayitlariListele", {
            fromTarget : "TargetView1"
            });
            } ,


        onPress: function (evt) {


            var PageController = Controller.extend("sap.m.sample.Button.Page"); 
                    MessageToast.show(evt.getSource().getId() + " Pressed");
                    return PageController;
                },

        onNavToDeneme: function (evt) {

            debugger;
        this.getRouter().getTargets().display("deneme");
        },

        onNavToDeneme2: function (evt) {

            debugger;
        this.getRouter().getTargets().display("deneme2");
        },

        onNavToDeneme3: function (evt) {

            debugger;
        this.getRouter().getTargets().display("deneme3");
        }



         });
    




         


    });
