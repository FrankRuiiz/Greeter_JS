(function(global, $){  // passed global/window and jquery in to the IIFE

    var Greetr = function(firstName, lastName, language) {          // returns Greetr.init so we dont have to use 'new' when creating a new Greetr
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {}; // This is where all Greetr methods will live

    Greetr.init = function(firstName, lastName, language) {

        var self =  this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

    };

    Greetr.init.prototype = Greetr.prototype; // Since the object is created with Greetr.init, we have to point to the prototype we want (this looks better)

    global.Greetr = global.G$ = Greetr;  // Exposes Greetr to the global object
    
})(window, jQuery);