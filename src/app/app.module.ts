import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { TypingDirective } from './directeives/typing.directive';
import { SharesModule } from './modules/shares/shares.module';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TypingDirective
  ],
  imports: [
    BrowserModule,
    SharesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
