import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PlayGameRoutingModule } from './play-game-routing.module';
import { PlayPageComponent } from './components/play-page/play-page.component';
import { SharesModule } from '../shares/shares.module';
import { ShowTextComponent } from './components/show-text/show-text.component';
import { BoxInformationComponent } from './components/box-information/box-information.component';

@NgModule({
  declarations: [
    PlayPageComponent,
    ShowTextComponent,
    BoxInformationComponent
  ],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
    SharesModule,
  ],
  providers: [DatePipe]
})
export class PlayGameModule { }
