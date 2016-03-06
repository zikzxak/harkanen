import {Component} from 'angular2/core';
import {SignupFormComponent} from './signup.component';

@Component({
    selector: 'my-app',
    template: '<signup-form></signup-form>',
    directives: [SignupFormComponent]
})
export class AppComponent { }
