import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PlayGameConstant } from '../constants/play-game.contstant';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  private storeText: string[] = [];
  private lifeValue = PlayGameConstant.life_value;
  currentLife$: BehaviorSubject<number> = new BehaviorSubject<number>(this.lifeValue);
  alphabetActive$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  randomText: string[] = [];

  constructor(
    private router: Router
  ) { }

  private getText(){
    const getText = PlayGameConstant.text;
    const randomIndex = Math.floor(Math.random() * getText.length);
    const returnText = getText[randomIndex].toUpperCase() .split('');

    this.randomText = returnText;
  }

  get resultText(): string[]{
    return this.storeText;
  }

  validateText(text: string) {

    if(this.randomText.includes(text)){
      this.storeText.push(text);
      this.successOrNot();
    }

    this.lifeValue --;
    this.currentLife$.next(this.lifeValue);
  }

  checkText(text: string): boolean{
    return this.randomText.includes(text);
  }

  firstSetting(){
    this.getText();
    this.lifeValue = PlayGameConstant.life_value;
    this.currentLife$.next(this.lifeValue);
    this.storeText = [];
  }

  private successOrNot(){
    if(this.lifeValue > 0){
      if(this.areEqualText()){

          setTimeout(() => {
            alert('Success, good answer');
            this.router.navigate(['/']);
          }, 100);

      }
    }
  }

  private areEqualText(): boolean{

    let tmpText = this.randomText.slice();

    this.storeText.forEach(el => {
      if(this.randomText.includes(el)){
        tmpText = tmpText.filter(val => val !== el)
      }
    });

    if(tmpText.length === 0){
      return true;
    }

    return false;
  }
}
