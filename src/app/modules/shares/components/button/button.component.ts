import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label!: string;
  @Input() active = false;
  @Input() typeText = false;

  constructor() { }

  ngOnInit(): void {
  }

  get classButton(){
    return this.active === true ? 'btn-primary': 'btn-secondary';
  }

}
