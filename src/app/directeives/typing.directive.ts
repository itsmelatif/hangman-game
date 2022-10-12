import { Directive, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayGameService } from '../modules/play-game/services/play-game.service';

@Directive({
  selector: '[appTyping]'
})
export class TypingDirective implements OnDestroy{

  constructor(
    private _playGameService: PlayGameService
  ) { }

  ngOnDestroy(): void {

  }

  @HostListener('window:keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    const alphabet = event.key.toUpperCase();
    this._playGameService.validateText(alphabet);
  }

}
