import { Component, OnInit } from '@angular/core';
import { PlayGameConstant } from '../../constants/play-game.contstant';
import { PlayGameService } from '../../services/play-game.service';


@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

  listAlphabet = PlayGameConstant.alphabet;

  constructor(
    private _playGameService: PlayGameService
  ) { }

  ngOnInit(): void {
    const randomText = this._playGameService.randomText;

    if(randomText.length === 0){
      this._playGameService.firstSetting();
    }

  }

  onClick(item: string){
    this._playGameService.validateText(item);
  }

  activeButton(item: string): boolean{
    return this._playGameService.resultText.includes(item);
  }

  typeButton(item: string): boolean {

    return false;
  }


}
