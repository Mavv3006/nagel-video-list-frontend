import { Injectable } from '@angular/core';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export abstract class LevelService {
  abstract getLevels(): Level[];
}
