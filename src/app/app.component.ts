import { Component } from '@angular/core';
import { FormPageComponent } from './form-page/form-page.component';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UserComponent } from './user/user.component';
import { CurrencyConverterPipePipe } from './pipe/currency-converter-pipe.pipe';

@Component({
  selector: 'app-root',
  imports: [
    FormPageComponent,
    ReactiveFormsModule,
    NgIf,
    TemplateDrivenFormComponent,
    UserComponent,
    CurrencyConverterPipePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FormsInAngular';
  userName = 'John Doe';
  amount = 10;

  usersList: undefined | string[];
  //console.log("1");
  handleUsers(users: string[]) {
    console.log('1');
    console.log(users);
    console.log('2');
    this.usersList = users;
  }

  onUserChange(user: string) {
    this.userName = user;
  }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setValues() {
    this.profileForm.setValue({
      name: 'John Doe',
      password: 'password123',
      email: 'john.doe@example.com',
    });
  }

  get name() {
    return this.profileForm.get('name');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get email() {
    return this.profileForm.get('email');
  }
}
