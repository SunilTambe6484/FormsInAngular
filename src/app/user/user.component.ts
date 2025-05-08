import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: string = '';
  @Input() city: string = '';
  @Output() getUsers = new EventEmitter();

  users: string[] = ['John', 'Jane', 'Doe', 'Smith'];

  ngOninit() {
    console.log('3');
    this.getUsers.emit(this.users);
    console.log('4');
  }
}
