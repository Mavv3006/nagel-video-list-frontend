import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { Video } from 'src/app/models/video';
import { LevelService } from 'src/app/services/level.service';
import { VideoListService } from '../services/video-list.service';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.scss']
})
export class VideoListPageComponent implements OnInit {

  levels: Level[] = [];

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.levels = this.levelService.getLevels();
  }

}
