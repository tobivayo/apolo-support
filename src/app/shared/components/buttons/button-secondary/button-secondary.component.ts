import { Component, Input } from '@angular/core';
import { ButtonGeneric } from '../button-generic';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule]
})
export class ButtonSecondaryComponent extends ButtonGeneric{
 @Input() selected: boolean = false;
}
