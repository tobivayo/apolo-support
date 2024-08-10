import { Component, Input } from '@angular/core';
import { ButtonGeneric } from '../button-generic';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
  standalone: true,
  imports: [MatButtonModule]
})
export class ButtonPrimaryComponent extends ButtonGeneric {}
