sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"],
    function(Controller,MessageToast,JSONModel,ResourceModel){
        "use strict";
        return Controller.extend("testsapui5.controller.App",{

/*            onInit : function(){
              //set data model on view
                var oData = {
                    recipient : {
                        name: "World"
                    }
                };
                
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                var i18nModel = new ResourceModel({
                   bundleName : "testsapui5.i18n.i18n"
                });
                this.getView().setModel(i18nModel,"i18n");
            },*/

            onClick: function() {
                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);

            },
            onClickGeolocation : function(){
                /*MessageToast.show("pressed!");*/
                //alert("pressed");
                console.log("clicked");

                navigator.geolocation.getCurrentPosition(this.onGeoSuccess,this.onGeoError,{ timeout: 100 });

            },
            onGeoSuccess : function(position){
                console.log("success");
                var txtLat = sap.ui.getCore().byId("__xmlview0--txtLat");
                txtLat.setText(position.coords.latitude);
                var txtLong = sap.ui.getCore().byId("__xmlview0--txtLong");
                txtLong.setText(position.coords.longitude);
                //MessageToast.show(position.toString());
            },
            onGeoError : function(error){
                console.log("error");
                alert('Error Code: ' + error.code  + '\nError Message: ' + error.message);

            }
        });
    }
);