import { Component, OnInit } from '@angular/core';
import { PlayGameService } from '../../services/play-game.service';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {

  randomText!: string[];

  constructor(
    private _playGameService: PlayGameService
  ) { }

  ngOnInit(): void {
    this.randomText = this._playGameService.randomText;
  }

  checkText(text: string): boolean{
    return this._playGameService.resultText.includes(text);
  }

}
