import { Component, Input, OnInit } from '@angular/core';
import { Dance } from 'src/app/models/dance';
import { Video } from 'src/app/models/video';
import { VideoListService } from '../services/video-list.service';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['./dance.component.scss']
})
export class DanceComponent {
  @Input()
  dance: Dance = { id: 0, name: '', videos: [] };
}
