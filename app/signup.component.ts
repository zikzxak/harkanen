import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Customer }    from './customer';
@Component({
  selector: 'signup-form',
  templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent {
  model = new Customer(18, 'Reetu Kainulainen', 'rkainulainen@gmail.com', '0442177002');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;
  newCustomer() {
  this.model = new Customer(42, '', '', '');
  this.active = false;
  setTimeout(()=> this.active=true, 0);
  }
}
