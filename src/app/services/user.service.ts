import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService {

  abstract getUser():User;
}
