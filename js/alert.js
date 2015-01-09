
(function (window, undefined) {

    "use strict";

    var alert = function (settings) {

        return new alert.fn.init(settings);


//        return notify;

    };

    alert.fn = alert.prototype = {

        constructor: alert,

        init: function (settings) {

            var notify = this;

            if (!settings) {
                settings = {};
            }

            notify.container = settings.container || notify.container;
            notify.closeButton = settings.closeButton || notify.closeButton;
            notify.msgContainer = settings.msgContainer || notify.msgContainer;
            notify.errorClass = settings.errorClass || notify.errorClass;
            notify.warningClass = settings.warningClass || notify.warningClass;
            notify.infoClass = settings.infoClass || notify.infoClass;
            notify.successClass = settings.successClass || notify.successClass;
            notify.inClass = settings.inClass || notify.inClass;

            notify.setupAlertElements();

            return notify;
        },

        version: "0.0.1",

        container: ".alert",
        closeButton: ".alert .close",
        msgContainer: ".alert-message",

        errorClass: "alert-danger",
        warningClass: "alert-warning",
        infoClass: "alert-info",
        successClass: "alert-success",
        inClass: "in",

        fadeIn: true,
        setup: false,

        mainContainer: undefined,
        closeBtn: undefined,
        message: undefined,

        setupAlertElements: function () {

            var notify = this;

            notify.mainContainer = document.querySelector(notify.container);
            notify.closeButton = document.querySelector(notify.closeButton);
            notify.msgContainer = document.querySelector(notify.msgContainer);

            if (!notify.mainContainer) {
                console.error("must have an alert container element.");
                return;
            }

            if (!notify.msgContainer) {
                console.error("must have an alert message element.");
                return;
            }

            if (notify.closeButton) {
    
                notify.closeButton.addEventListener("click", function () {

                    notify.closeAlert();

                });

            }
            
            notify.setup = true;

        },

        showError: function (message, dissmissible) { 
        
            var notify = this;

            notify.showAlert(message, notify.errorClass, dissmissible);
        
        },

        showWarning: function (message, dissmissible) { 
        
            var notify = this;

            notify.showAlert(message, notify.warningClass, dissmissible);
        
        },

        showInfo: function (message, dissmissible) { 
        
            var notify = this;

            notify.showAlert(message, notify.infoClass, dissmissible);
        
        },

        showSuccess: function (message, dissmissible) { 
        
            var notify = this;

            notify.showAlert(message, notify.successClass, dissmissible);
        
        },

        clearType: function () {

            var notify = this;

            notify.mainContainer.classList.remove(notify.errorClass);
            notify.mainContainer.classList.remove(notify.warningClass);
            notify.mainContainer.classList.remove(notify.infoClass);
            notify.mainContainer.classList.remove(notify.successClass);

        },

        showAlert: function (message, type, dissmissible) {

            var notify = this;

            if (!notify.setup || !message) {
                return;
            }

            if (typeof type !== "string") {
                type = notify.infoClass;
            }

            notify.clearType();

            notify.mainContainer.style.display = "block";

            notify.mainContainer.classList.add(type);

            if (!dissmissible) {
                notify.closeButton.style.display = "none";
            } else {
                notify.closeButton.style.display = "block";
            }

            if (notify.fadeIn) {
                notify.mainContainer.classList.add("in");
            }

            notify.msgContainer.innerHTML = message;

        },

        closeAlert: function (e) {

            var notify = this;

            if (notify.fadeIn) {
                notify.mainContainer.classList.remove("in");
            }

            notify.mainContainer.style.display = "none";

        }

    };

    // Give the init function the alert prototype for later instantiation
    alert.fn.init.prototype = alert.fn;

    return (window.alert = alert);


}(window));