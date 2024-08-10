import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupportComponent } from './features/support/views/support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SupportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apolo-support';
}
