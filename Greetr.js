(function(global, $){  // passed global/window and jquery in to the IIFE

    var Greetr = function(firstName, lastName, language) {          // returns Greetr.init so we dont have to use 'new' when creating a new Greetr
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        em: 'Logged in',
        es: 'Inicio Sesion'
    };

    Greetr.prototype = {  // This is where all Greetr methods will live

        fullName: function() {
            return this.fullName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {

            var msg;

            //if undefined or null it will be coerced to false
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if(console) {
                console.log(msg);
            }
            // this refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if(console) {
                console.log( logMessages[this.language] + ': ' + this.fullName() )
            }

            return this;
        }


    };

    Greetr.init = function(firstName, lastName, language) {

        var self =  this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    };

    Greetr.init.prototype = Greetr.prototype; // Since the object is created with Greetr.init, we have to point to the prototype we want (this looks better)

    global.Greetr = global.G$ = Greetr;  // Exposes Greetr to the global object
    
})(window, jQuery);