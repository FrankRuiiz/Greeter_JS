(function(global, $){

    var Greetr = function(fistName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        var self =  this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

    }

    Greetr.init.prototype = Greetr.prototype;
    
})(window, jQuery);