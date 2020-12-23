import { Injectable } from '@angular/core';
import { user } from '../mock-data/user';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MockUserService implements UserService {
  getUser(): User {
    return user;
  }
}
