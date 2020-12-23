import { Injectable } from '@angular/core';
import { Video } from 'src/app/models/video';

@Injectable()
export abstract class VideoListService {


  abstract getVideos(): Video[];
}
