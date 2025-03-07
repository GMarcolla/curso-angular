import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit();
  }
}
