import { Component } from '@angular/core';
import { ButtonGeneric } from '../button-generic';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.scss'],
  standalone: true,
  imports: [ MatButtonModule]
})
export class ButtonCancelComponent extends ButtonGeneric {

}
