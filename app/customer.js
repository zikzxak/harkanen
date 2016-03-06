System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(id, name, email, phone) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.phone = phone;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=customer.js.map