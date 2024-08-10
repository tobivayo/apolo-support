import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
  standalone: true,
  imports: []
})
export abstract class ButtonGeneric {
  @Input() label: string = 'Label';
  @Input() size: string = 'regular';
  @Input() isDisabled: boolean = false;
  @Input() id: string = 'flat';

  @Output() btnClick = new EventEmitter();
}
