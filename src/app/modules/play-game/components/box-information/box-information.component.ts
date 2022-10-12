import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayGameService } from '../../services/play-game.service';

@Component({
  selector: 'app-box-information',
  templateUrl: './box-information.component.html',
  styleUrls: ['./box-information.component.css']
})
export class BoxInformationComponent implements OnInit, OnDestroy {

  today!: any;
  currentLife!: number;
  subs!: Subscription;

  constructor(
    private _playGameService: PlayGameService,
    private datePipe: DatePipe,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLife();
    this.getDate();
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  getLife(){
    this.subs = this._playGameService.currentLife$.subscribe(res => {
      this.currentLife = res;
      this.death();
    });
  }

  getDate(){
    const today = new Date();
    this.today = this.datePipe.transform(today, 'dd/MM/YYYY hh:mm');
  }

  death(){
    if(this.currentLife === 0){
      alert('Your death !')
      this.router.navigate(['/']);
    }
  }

}
