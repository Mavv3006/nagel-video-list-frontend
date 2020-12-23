import { Component, Input } from '@angular/core';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {

  @Input()
  level: Level = { dances: [], id: 0, title: '' };
}
