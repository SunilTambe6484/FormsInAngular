import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  adddetails: any = {
    name: '',
    password: '',
    gender: '',
    range: '',
  };

  addDetails(userDetails: any) {
    this.adddetails.name = userDetails.name;
    this.adddetails.password = userDetails.password;
    this.adddetails.gender = userDetails.gender;
    this.adddetails.range = userDetails.range;
  }
}
