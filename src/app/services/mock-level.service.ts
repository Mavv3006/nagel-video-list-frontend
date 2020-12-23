import { Injectable } from '@angular/core';
import { Level } from '../models/level';
import { LevelService } from './level.service';
import { levels } from '../mock-data/levels';

@Injectable({
  providedIn: 'root'
})
export class MockLevelService implements LevelService {

  getLevels(): Level[] {
    return levels;
  }

}
