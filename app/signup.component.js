System.register(['angular2/core', './customer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customer_1;
    var SignupFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            }],
        execute: function() {
            SignupFormComponent = (function () {
                function SignupFormComponent() {
                    this.model = new customer_1.Customer(18, 'Reetu Kainulainen', 'rkainulainen@gmail.com', '0442177002');
                    this.submitted = false;
                    this.active = true;
                }
                SignupFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(SignupFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                SignupFormComponent.prototype.newCustomer = function () {
                    var _this = this;
                    this.model = new customer_1.Customer(42, '', '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                SignupFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'app/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignupFormComponent);
                return SignupFormComponent;
            }());
            exports_1("SignupFormComponent", SignupFormComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map