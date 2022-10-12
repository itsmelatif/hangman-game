import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [{
  path: '', children: [
    { path: '', component: StartPageComponent },
    { path: 'start', loadChildren: () => import('./modules/play-game/play-game.module').then(m => m.PlayGameModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
