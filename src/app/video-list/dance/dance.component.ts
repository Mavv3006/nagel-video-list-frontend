import { Component, Input } from '@angular/core';
import { Dance } from 'src/app/models/dance';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['./dance.component.scss'],
})
export class DanceComponent {
  @Input()
  dance: Dance = { id: 0, name: '', videos: [] };
}
