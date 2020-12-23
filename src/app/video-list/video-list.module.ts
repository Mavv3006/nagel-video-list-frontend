import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListPageComponent } from './video-list-page/video-list-page.component';
import { VideoListService } from './services/video-list.service';
import { LevelComponent } from './level/level.component';
import { LevelService } from '../services/level.service';
import { MockLevelService } from '../services/mock-level.service';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { MockUserService } from '../services/mock-user.service';
import { HeaderComponent } from './header/header.component';
import { DanceComponent } from './dance/dance.component';



@NgModule({
  declarations: [VideoListPageComponent, LevelComponent, UserComponent, HeaderComponent, DanceComponent],
  imports: [CommonModule],
  exports: [VideoListPageComponent],
  providers: [
    {
      provide: LevelService,
      useClass: MockLevelService
    },
    {
      provide: UserService,
      useClass: MockUserService
    },
  ]
})
export class VideoListModule { }
