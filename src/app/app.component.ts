import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';
import { User } from './user/user.model';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  id: any;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  trackById(index: number, user: User) {
    return user.id;
  }
}
