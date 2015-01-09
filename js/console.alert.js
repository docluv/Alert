
(function (window, undefined) {

    "use strict";

    var consoleAlert = function () {

        return new consoleAlert.fn.init();
    };

    consoleAlert.fn = consoleAlert.prototype = {

        constructor: consoleAlert,

        init: function () {

            return this;

        },

        version: "0.0.1",


        showError: function (message) {

            console.error(message);
        },

        showWarning: function (message) {

            console.warn(message);
        },

        showInfo: function (message) {

            console.info(message);
        },

        showSuccess: function (message) {

            console.info(message);
        }

    };

    // Give the init function the alert prototype for later instantiation
    consoleAlert.fn.init.prototype = consoleAlert.fn;

    return (window.consoleAlert = consoleAlert);


}(window));