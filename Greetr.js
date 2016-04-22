(function(global, $){  // passed global/window and jquery in to the IIFE

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {          // returns Greetr.init so we dont have to use 'new' when creating a new Greetr
        return new Greetr.init(firstName, lastName, language);
    };

    // Hidden within the scope of IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // Informal greeting
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // Formal greeting
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // Console log messages
    var logMessages = {
        em: 'Logged in',
        es: 'Inicio Sesion'
    };

    // Prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check that this.language is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // Retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
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
            // make chainable
            return this;
        },

        setLang: function(lang) {
            // Set the language
            this.language = lang;
            // validate
            this.validate();
            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }
            if(!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            // inject the message in the chosen place in the dom
            $(selector).html(msg);
            // Make chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self =  this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    };

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach out Greetr to the global object, and provide a shorthand '$G' for ease
    global.Greetr = global.G$ = Greetr;
    
})(window, jQuery);