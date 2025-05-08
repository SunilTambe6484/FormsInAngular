import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent {
  name = new FormControl('Sunil');
  password = new FormControl('12345');

  displayValue() {
    console.log(this.name.value, this.password.value);
  }

  setValues() {
    this.name.setValue('John Doe');
    this.password.setValue('67890');
  }
}
