import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayGameService } from 'src/app/modules/play-game/services/play-game.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(
    private _router: Router,
    private _playGameService: PlayGameService
  ) { }

  ngOnInit(): void {
  }

  onStartGame(){
    this._playGameService.firstSetting();
    this._router.navigate(['/start']);
  }



}
